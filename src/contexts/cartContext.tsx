"use client";

import { ProductType } from "@prisma/client";
import React, { createContext, ReactNode, useContext, useState } from "react";

type CartItemType = ProductType & {
    quantity: number;
    userSession: string;
};

type CartContextType = {
    cart: CartItemType[];
    addToCart: (product: ProductType, quantity: number, userSession: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItemType[]>([]);

    const addToCart = (product: ProductType, quantity: number, userSession: string) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingItemIndex >= 0) {
                const updatedCart : any= [...prevCart];
                updatedCart[existingItemIndex].quantity += quantity;
                return updatedCart;
            }
            return [...prevCart, { ...product, quantity, userSession }];
        });
    };

    return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
