
// PaymentMethod route handlers
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET: Fetch PaymentMethods (all or by ID)
export async function GET(req: NextRequest) {
    try {
        // Parse the `id` query parameter
        const id = req.nextUrl.searchParams.get('id');

        if (id) {
            // Fetch PaymentMethod by ID
            const paymentMethod = await prisma.paymentMethod.findUnique({
                where: { id },
            });

            if (!paymentMethod) {
                return NextResponse.json(
                    { message: "PaymentMethod not found" },
                    { status: 404 }
                );
            }

            return NextResponse.json(paymentMethod, { status: 200 });
        }

        // Fetch all PaymentMethods
        const paymentMethods = await prisma.paymentMethod.findMany();
        return NextResponse.json(paymentMethods, { status: 200 });
    } catch (error) {
        return handleError("Error fetching payment methods", error, 500);
    }
}
// POST: Create a new PaymentMethod
export async function POST_PAYMENT_METHOD(req: Request) {
    try {
        const { method } = await req.json();
        if (!method) {
            return NextResponse.json(
                { message: "Missing required field: method" },
                { status: 400 }
            );
        }
        const newPaymentMethod = await prisma.paymentMethod.create({ data: { method } });
        return NextResponse.json(newPaymentMethod, { status: 201 });
    } catch (error) {
        return handleError("Error creating payment method", error, 500);
    }
}

// PUT: Update a PaymentMethod
export async function PUT_PAYMENT_METHOD(req: Request) {
    try {
        const { id, method } = await req.json();
        if (!id || !method) {
            return NextResponse.json(
                { message: "Missing required fields: id and method" },
                { status: 400 }
            );
        }
        const updatedPaymentMethod = await prisma.paymentMethod.update({
            where: { id },
            data: { method },
        });
        return NextResponse.json(updatedPaymentMethod, { status: 200 });
    } catch (error) {
        return handleError("Error updating payment method", error, 500);
    }
}

// DELETE: Delete a PaymentMethod
export async function DELETE_PAYMENT_METHOD(req: Request) {
    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json(
                { message: "Missing required field: id" },
                { status: 400 }
            );
        }
        await prisma.paymentMethod.delete({ where: { id } });
        return NextResponse.json(
            { message: "PaymentMethod deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        return handleError("Error deleting payment method", error, 500);
    }
}
