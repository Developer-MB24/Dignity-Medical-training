// hooks/wishlist/wishlistContext.js
"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner"; // Assuming 'sonner' is your toast library

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage when the app starts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const addToWishlist = (course) => {
    // Check if the course is already in the wishlist
    if (wishlist.some((item) => item.id === course.id)) {
      toast.error("Item is already in the wishlist!");
      return;
    }

    // Add course to wishlist if not already added
    const updatedWishlist = [...wishlist, course];
    setWishlist(updatedWishlist);
    toast.success(`Added ${course.course_title} to wishlist!`);
  };

  const removeFromWishlist = (courseId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== courseId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Ensure removal is saved
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
