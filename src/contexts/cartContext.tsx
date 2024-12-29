"use client";

import { Product } from "@prisma/client";
import axios from "axios";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { useSession } from "./SessionContext";

// Cart item type including relevant fields from the Cart model
type CartItemType = {
    id: string;
    productId: string;
    price: string | any;
    userId: string;
    quantity: number;
    statusId: string;
    product: Product;
};

// Context type
type CartContextType = {
    setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>  | any;
    cart: CartItemType[];
    addToCart: (productId: string, userId: string, quantity: number) => Promise<void>;
    removeFromCart: (cartItemId: string) => Promise<void>;
    clearCart: (userId: string) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItemType[]>([]);
    const session: any = useSession();

    const sessionToken = session?.token;

    // Fetch cart items for the current session/user when the cart provider mounts
    React.useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`/api/carts`, {
                    headers: {
                        Authorization: `Bearer ${sessionToken}`,
                    },
                });
                setCart(response.data);
            } catch (error) {
                console.error("Failed to fetch cart items:", error);
            }
        };

        if (sessionToken) {
            fetchCartItems();
        }
    }, [sessionToken]);

    // Add item to cart
    const addToCart = async (productId: string, userId: string, quantity: number) => {
        try {
            const existingItemIndex = cart.findIndex(
                (item) => item.productId === productId && item.userId === userId
            );

            if (existingItemIndex >= 0) {
                const updatedCart: any = [...cart];
                updatedCart[existingItemIndex].quantity += quantity;

                const response = await axios.put(
                    "/api/carts",
                    {
                        id: updatedCart[existingItemIndex].id,
                        quantity: updatedCart[existingItemIndex].quantity,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${sessionToken}`,
                        },
                    }
                );

                updatedCart[existingItemIndex] = response.data;
                setCart(updatedCart);
            } else {
                // Fetch the status ID for the "active" status
                const statusResponse = await axios.get("/api/cartStatuses", {
                    headers: {
                        Authorization: `Bearer ${sessionToken}`,
                    },
                });

                const activeStatus = statusResponse.data.find(
                    (status: { name: string }) => status.name === "active"
                );

                if (!activeStatus) {
                    throw new Error("Active status not found");
                }

                const statusId = activeStatus.id;

                const response = await axios.post(
                    "/api/carts",
                    { productId, userId, quantity, statusId },
                    {
                        headers: {
                            Authorization: `Bearer ${sessionToken}`,
                        },
                    }
                );

                setCart((prevCart) => [...prevCart, response.data]);
            }
        } catch (error) {
            console.error("Failed to add item to cart:", error);
        }
    };


    // Remove item from cart
    const removeFromCart = async (cartItemId: string) => {
        try {
            await axios.delete(`/api/carts/${cartItemId}`, {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
            });

            setCart((prevCart) => prevCart.filter((item) => item.id !== cartItemId));
        } catch (error) {
            console.error("Failed to remove item from cart:", error);
        }
    };

    // Clear the entire cart for a user
    const clearCart = async (userId: string) => {
        try {
            await axios.delete(`/api/carts`, {
                params: { userId },
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
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
