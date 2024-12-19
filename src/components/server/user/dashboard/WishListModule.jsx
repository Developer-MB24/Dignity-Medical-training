"use client";
import { useWishlist } from "@/hooks/wishlist/wishlistContext";
import { useCart } from "@/hooks/cart/cartContext"; // Assuming this exists
import Image from "next/image";
import React from "react";
import programming from "/public/images/pages/first_aid.jpg";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const WishListModule = () => {
  const { wishlist, addToWishlist, removeFromWishlist, successMessage } =
    useWishlist();
  const { addToCart } = useCart(); // Using the cart hook
  console.log(wishlist);

  const handleAddToCart = (course) => {
    addToCart(course); // Add item to cart
  };

  return (
    <div className="py-2 pt-2">
      {/* Success message */}
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {successMessage}
        </div>
      )}

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Render items from wishlist */}
        {wishlist.map((course, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md text-black/80 flex flex-col space-y-2"
          >
            <div className="relative h-48">
              <Image
                src={programming}
                alt="wishlist"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className=" font-bold text-goldlight w-fit py-1 rounded-sm">
              {course.course_title}
            </p>
            <div className="flex justify-between items-center">
              <button
                className="bg-red-500 text-white text-sm px-3 py-2 rounded"
                onClick={() => removeFromWishlist(course.id)}
              >
                Remove
              </button>
              <div
                role="button"
                onClick={() => handleAddToCart(course)}
                className="text-white bg-goldlight px-4 py-2 rounded-md flex items-center transition-transform duration-100 hover:bg-primarygold"
              >
                <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListModule;
