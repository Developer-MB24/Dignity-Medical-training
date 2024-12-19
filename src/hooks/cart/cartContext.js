"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner"; // Assuming you're using the 'sonner' toast library
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "@/utils/cartUtils";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart items from local storage when the app starts
  useEffect(() => {
    const loadedCartItems = loadCartFromLocalStorage();
    setCartItems(Array.isArray(loadedCartItems) ? loadedCartItems : []);
  }, []);

  // Add a course to the cart
  const addToCart = (course) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === course.id);

    if (isAlreadyInCart) {
      toast.error("Course is already in the cart!");
    } else {
      const updatedCart = [...cartItems, course];
      setCartItems(updatedCart);
      saveCartToLocalStorage(updatedCart);
      setIsCartOpen(true); // Optionally open the cart when an item is added
      toast.success(`Added ${course.course_title} to the cart!`);
    }
  };

  // Remove a course from the cart
  const removeFromCart = (courseId) => {
    const updatedCart = cartItems.filter((item) => item.id !== courseId);
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Toggle the cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Calculate total price of the items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.course_price);
    return total + (isNaN(itemPrice) ? 0 : itemPrice);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        toggleCart,
        isCartOpen,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext in any component
export const useCart = () => useContext(CartContext);
