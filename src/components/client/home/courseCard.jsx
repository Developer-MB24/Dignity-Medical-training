"use client";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import { useWishlist } from "@/hooks/wishlist/wishlistContext";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";

// Function to strip HTML tags
const stripHtmlTags = (html) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
};

// Function to get the image path based on course ID
const getCourseImage = (id) => {
  return `/assets/courses/course-${id}.jpg`; // Image path for each course
};

const CourseCard = ({ course, onAddToCart, onEnroll }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // State to store whether to use fallback image
  const [imageSrc, setImageSrc] = useState(getCourseImage(course.id));
  const [isImageError, setIsImageError] = useState(false); // New state for image error

  // Check if the course is already in the wishlist
  const isInWishlist = wishlist.some((item) => item.id === course.id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(course.id);
    } else {
      addToWishlist(course);
    }
  };

  // Fallback image handler
  const handleImageError = () => {
    setIsImageError(true); // Set error state to true
  };

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-goldlight shadow-md bg-clip-border rounded-xl w-80 sm:w-96 group">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-goldlight">
        <Link href={`/courseDetailPage/${course.id}`}>
          {!isImageError ? (
            <Image
              src={imageSrc} // Dynamically load image based on course ID
              width="500"
              height="500"
              alt={`Course ${course.id} Image`} // Use dynamic alt text
              className="rounded-md w-full h-full object-cover"
              onError={handleImageError} // Trigger fallback image on error
            />
          ) : (
            <Image
              src="/assets/courses/course.jpg" // Default fallback image
              width="500"
              height="500"
              alt="Fallback Course Image"
              className="rounded-md w-full h-full object-cover"
            />
          )}
        </Link>
        {/* Heart Icon positioned at the top-right corner */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 text-2xl text-black/70 hover:text-goldlight transition duration-200"
        >
          {isInWishlist ? <GoHeartFill /> : <FiHeart />}
        </button>
      </div>
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <Link href={`/courseDetailPage/${course.id}`}>
            <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-goldlight hover:text-primarygold">
              {course.course_title}
            </h5>
            <p className="text-gray-400 text-base antialiased font-light leading-relaxed text-inherit line-clamp-4 hover:text-primarygold">
              {stripHtmlTags(course.description)}
            </p>
          </Link>
        </div>
        <div className="flex justify-between items-center py-4">
          <p className="font-semibold text-nowrap pr-4">
            Price:{" "}
            <span className="text-goldlight font-bold">
              ${course.course_price}
            </span>
          </p>
          <button
            onClick={() => onEnroll(course)}
            className="text-white font-bold py-2 px-4 mr-4 rounded-md bg-goldlight hover:bg-primarygold hover:text-white transition duration-100"
          >
            Enroll
          </button>
          <div
            role="button"
            onClick={() => onAddToCart(course)}
            className="text-white hover:text-white font-bold py-2 px-4 rounded-md bg-goldlight hover:bg-primarygold transition duration-100"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-lg group-hover:translate-x-3 transition duration-500 group-hover:-rotate-[10deg]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
