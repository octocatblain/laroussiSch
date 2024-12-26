"use client";

import { Product } from "@prisma/client";
import React, { createContext, ReactNode, useContext, useState } from "react";

// Cart item type including relevant fields from the Cart model
type CartItemType = {
    id: number;
    productId: number;
    userId: number;
    quantity: number;
    statusId: number;
    product: Product;
};

// Context type
type CartContextType = {
    cart: CartItemType[];
    addToCart: (productId: number, userId: number, quantity: number) => Promise<void>;
    removeFromCart: (cartItemId: number) => Promise<void>;
    clearCart: (userId: number) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItemType[]>([]);

    // Add item to cart
    const addToCart = async (productId: number, userId: number, quantity: number) => {
        try {
            // Check if the item already exists in the cart
            const existingItemIndex = cart.findIndex((item) => item.productId === productId && item.userId === userId);

            if (existingItemIndex >= 0) {
                // Update quantity if item exists
                const updatedCart : any= [...cart];
                updatedCart[existingItemIndex].quantity += quantity;

                // Update in database
                await fetch("/api/cart", {
                    method: "PUT",
                    body: JSON.stringify({
                        id: updatedCart[existingItemIndex].id,
                        quantity: updatedCart[existingItemIndex].quantity,
                    }),
                });

                setCart(updatedCart);
            } else {
                // Create new cart item
                const response = await fetch("/api/cart", {
                    method: "POST",
                    body: JSON.stringify({ productId, userId, quantity }),
                });

                const newCartItem = await response.json();

                setCart((prevCart) => [...prevCart, newCartItem]);
            }
        } catch (error) {
            console.error("Failed to add item to cart:", error);
        }
    };

    // Remove item from cart
    const removeFromCart = async (cartItemId: number) => {
        try {
            await fetch(`/api/cart/${cartItemId}`, {
                method: "DELETE",
            });

            setCart((prevCart) => prevCart.filter((item) => item.id !== cartItemId));
        } catch (error) {
            console.error("Failed to remove item from cart:", error);
        }
    };

    // Clear the entire cart for a user
    const clearCart = async (userId: number) => {
        try {
            await fetch(`/api/cart?userId=${userId}`, {
                method: "DELETE",
            });

            setCart((prevCart) => prevCart.filter((item) => item.userId !== userId));
        } catch (error) {
            console.error("Failed to clear cart:", error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
