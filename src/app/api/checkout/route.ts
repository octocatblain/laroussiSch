// src/app/api/checkout/route.ts
import { prisma } from '@/lib/prisma';
import { calculateTaxes, estimateDelivery } from '@/utils/checkout';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId, products, contactInfo, shippingInfo, paymentMethod } = body;

        if (!userId || !products || !contactInfo || !shippingInfo || !paymentMethod) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Fetch user and product details
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const productIds = products.map((product: { id: string }) => product.id);
        const dbProducts = await prisma.product.findMany({ where: { id: { in: productIds } } });

        if (dbProducts.length !== products.length) {
            return NextResponse.json({ error: 'Some products are not available' }, { status: 404 });
        }

        // Calculate subtotal, taxes, and total
        let subtotal = 0;
        const detailedProducts = dbProducts.map((dbProduct) => {
            const matchingProduct = products.find((p: { id: string }) => p.id === dbProduct.id);
            const quantity = matchingProduct?.quantity || 0;

            const productTotal = dbProduct.price * quantity;
            subtotal += productTotal;

            return {
                ...dbProduct,
                quantity,
                productTotal,
            };
        });

        const taxes = calculateTaxes(detailedProducts);
        const total = subtotal + taxes;
        const estimatedDelivery = estimateDelivery(shippingInfo.address);

        // Create the order
        const order = await prisma.order.create({
            data: {
                userId,
                products: {
                    create: detailedProducts.map((product) => ({
                        productId: product.id,
                        quantity: product.quantity,
                        price: product.price,
                        total: product.productTotal,
                    })),
                },
                contactInfo,
                shippingInfo,
                paymentMethod,
                subtotal,
                taxes,
                total,
                estimatedDelivery,
            },
        });

        return NextResponse.json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred during the checkout process' }, { status: 500 });
    }
}

