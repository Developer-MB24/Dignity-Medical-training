"use client";
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import React from "react";

const CoursePage = () => {
  return (
    <>
      <Header token={undefined} />
      <div className="bg-gray-100 min-h-screen py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            {/* Course Title */}
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
            First Aid and CPR & AED
            </h1>
            <p className="text-lg text-gray-700 mb-6">
            Pediatric Life Support training equips employees of food service
              environments with the skills and knowledge required for safely
            </p>

            {/* Premium Section */}
            <div className="flex items-center bg-purple-100 border border-black p-4 rounded-lg mb-6">
              <div className="flex items-center mr-6">
                <div className="bg-customBlue text-white p-2 rounded-full">
                  <span className="text-lg font-bold">★</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-customBlue ">Premium</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!.{" "}
                    <a
                      href="#"
                      className="text-customBlue hover:underline font-semibold"
                    >
                      See Plans & Pricing
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex-1 flex justify-around items-center">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800">4.4</h4>
                  <div className="text-yellow-500 text-sm">★★★★☆</div>
                  <p className="text-sm text-gray-600">1,682 ratings</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800">119,374</h4>
                  <p className="text-sm text-gray-600">learners</p>
                </div>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="border border-black rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!
                  </li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, rerum!
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 ">
            <video
              src="/videos/coursevideo3.mp4"
              autoPlay
              muted
              controls
              loop
              className=" w-full h-60 rounded-md mb-4"
              poster="/images/video-poster.png"
            >
              Your browser does not support the video tag.
            </video>
            <h2 className="text-xl font-bold text-gray-800 mb-4">$10</h2>

            <p className="text-red-600 font-bold text-sm mb-4">
              4 days left at this price!
            </p>
            <button className="w-full bg-customBlue text-white py-2 rounded-md ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
