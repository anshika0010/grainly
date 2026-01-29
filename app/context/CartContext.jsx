"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getSessionId } from "../lib/session";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const sessionId = getSessionId();

  const fetchCart = async () => {
    if (!sessionId) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cart/${sessionId}`,
    );
    const data = await res.json();
    setCartItems(data.items || []);
    console.log("Cart items fetched:", data.items);
  };

  const addToCart = async (product, quantity = 1) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cart/${sessionId}/add`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          quantity,
        }),
      },
    );

    await fetchCart();
    setIsCartOpen(true); // ✅ cart auto open
  };

  const removeFromCart = async (productId) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cart/${sessionId}/remove/${productId}`,
      { method: "DELETE" },
    );
    fetchCart();
  };

  const updateQty = async (productId, quantity) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cart/${sessionId}/update/${productId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      },
    );
    fetchCart();
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
