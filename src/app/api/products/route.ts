import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Fetch all products or a specific product by ID
// export async function GET(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const productId = searchParams.get("id");

//     if (productId) {
//       // Fetch a single product by ID
//       const product = await prisma.product.findUnique({
//         where: { id: productId }, // UUID, no parseInt
//       });

//       if (product) {
//         return NextResponse.json(product, { status: 200 });
//       } else {
//         return NextResponse.json(
//           { message: "Product not found" },
//           { status: 404 }
//         );
//       }
//     } else {
//       // Fetch all products
//       const products = await prisma.product.findMany();
//       return NextResponse.json(products, { status: 200 });
//     }
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json(
//       { message: "Failed to fetch products" },
//       { status: 500 }
//     );
//   }
// }
// GET: Fetch all products or a specific product by ID
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");

    if (productId) {
      // Fetch a single product by ID with saved items
      const product = await prisma.product.findUnique({
        where: { id: productId },
        include: {
          savedItems: true,
          type: true,
          weight: true,
          storageLocations: true,
          orders: true,
        }, // Include savedItems in the response
      });

      if (product) {
        return NextResponse.json(product, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "Product not found" },
          { status: 404 }
        );
      }
    } else {
      // Fetch all products with saved items
      const products = await prisma.product.findMany({
        include: { savedItems: true }, // Include savedItems in the response for all products
      });

      return NextResponse.json(products, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST: Create a new product
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newProduct = await prisma.product.create({ data });
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Failed to create product" },
      { status: 500 }
    );
  }
}

// PUT: Update an existing product
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { id, ...updates } = data;

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: updates,
    });
    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Failed to update product" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a product
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.product.delete({ where: { id } });
    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Failed to delete product" },
      { status: 500 }
    );
  }
}
