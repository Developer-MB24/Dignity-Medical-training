"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const CourseFilters = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-white py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">All Courses</h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-4">
          <button
            onClick={() => handleTabClick("all")}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
              activeTab === "all"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-red-600"
            }`}
          >
            <span className="text-lg">●</span> <span>All</span>
          </button>
          <button
            onClick={() => handleTabClick("online")}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
              activeTab === "online"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-red-600"
            }`}
          >
            <span className="text-lg">💻</span> <span>Online - Self Paced</span>
          </button>
          <button
            onClick={() => handleTabClick("classroom")}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
              activeTab === "classroom"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-red-600"
            }`}
          >
            <span className="text-lg">👩‍🏫</span> <span>Classroom Courses</span>
          </button>
          <button
            onClick={() => handleTabClick("zoom")}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
              activeTab === "zoom"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-red-600"
            }`}
          >
            <span className="text-lg">📹</span> <span>Zoom Classes</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Type Here to Find a Specific Course"
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="px-4 py-2 bg-red-600 text-white hover:bg-red-500">
              <FaSearch />
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">More Filters:</span>
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              >
                <option>Languages</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <select
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              >
                <option>Locations</option>
                <option>Arizona</option>
                <option>New York</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFilters;
