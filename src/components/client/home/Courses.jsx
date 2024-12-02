"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "./courseCard";
import Image from "next/image";
import CartPanel from "../common/CartPanel"; // Adjust the import path based on your project structure
import { toast } from "sonner";
import { loadCartFromLocalStorage } from "@/utils/cartUtils";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { useCart } from "@/hooks/cart/cartContext";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cartItems, isCartOpen, addToCart, removeFromCart, toggleCart } =
    useCart();
  const router = useRouter();

  // Fetch Courses from API
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/apiRoutes/addcourse");
      if (response.data.success && Array.isArray(response.data.courses)) {
        setCourses(response.data.courses);
      } else {
        console.error("Failed to fetch courses:", response.data.error);
        toast.error("Failed to fetch courses.");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("An error occurred while fetching courses.");
    } finally {
      setLoading(false);
    }
  };

  // Load Cart Items from Local Storage
  useEffect(() => {
    fetchCourses();
    const loadedCartItems = loadCartFromLocalStorage();
    console.log(loadedCartItems);
  }, []);

  // Handle Course Enrollment
  const handleEnroll = (course) => {
    router.push(`user/enrollpage/${course.id}`);
  };

  return (
    <>
      <section
        className="mx-0 md:mx-2 lg:mx-8 my-10 md:my-2 px-5 sm:px-10 md:px-16 xl:px-12 py-10 lg:py-10 bg-zinc-100 transition-colors duration-300 ease-in-out hover:bg-zinc-200 rounded-3xl shadow-2xl"
        id="allcourse"
      >
        <h3 className="text-3xl font-bold text-goldlight text-center pb-5 sm:pb-10">
          Our Trending Courses
        </h3>
        {loading ? (
          <div className="text-center text-white">
            <ClipLoader size={20} color={"#1D3563 "} />
          </div>
        ) : Array.isArray(courses) && courses.length > 0 ? (
          <div className="flex overflow-x-auto space-x-10 snap-center p-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onAddToCart={addToCart}
                onEnroll={handleEnroll}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-black">
            No courses available. Please check back later.
          </p>
        )}
        {isCartOpen && (
          <>
            {/* Dark Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
              onClick={toggleCart}
              aria-hidden="true"
            />
            {/* Cart Panel */}
            <CartPanel
              cartItems={cartItems}
              onClose={toggleCart}
              onRemoveFromCart={removeFromCart}
            />
          </>
        )}
      </section>

      {/* Why Choose Dignity Section */}
      <section
        className="bg-gradient-to-r from-primarygold via-goldlight to-primarygold mt-4 text-white py-16 px-6"
        id="aboutus"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="relative rounded-lg shadow-lg overflow-hidden w-[90%] md:w-[80%]">
              <Image
                src="/images/pages/at2.png"
                alt="Classroom Image"
                width={600}
                height={100}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-extrabold mb-6 text-primarygold">
              Why Choose Dignity Medical Training?
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              At DMT, we equip healthcare professionals in Phoenix with not just
              certifications but hands-on experience and expert training. Guided
              by seasoned instructors, we prepare you for a successful career in
              healthcare with practical skills and in-depth knowledge.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're advancing your career or stepping into the
              healthcare field, Dignity Medical Training is your trusted partner
              for growth, empowering you to excel and make a meaningful impact.
              Dignity Medical Training stands as your trusted partner in
              professional development, guaranteeing you are prepared for
              success in healthcare.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
