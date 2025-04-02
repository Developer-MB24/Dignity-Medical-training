"use client";
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const PediatricLifeSupport = () => {
  const [activeTab, setActiveTab] = useState("all");

  const languages = ["Languages", "English", "Spanish"];
  const locations = ["Locations", "Arizona"];

  const [selectedLanguage, setSelectedLanguage] = useState("Languages");
  const [languageOpen, setLanguageOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("Locations");
  const [locationOpen, setLocationOpen] = useState(false);

  const courses = [
    {
      id: 1,
      name: "Food Handler's Card",
      link: "/food-handler",
      instructor: {
        modules: 1,
      },
      price: 10.0,
      image: "/coursesimage/course1.png",
    },
    {
      id: 2,
      name: "Pediatric Life Support",
      link: "/pediatric-life",
      instructor: {
        modules: 1,
      },
      price: 75.0,
      image: "/coursesimage/course2.png",
    },
    {
      id: 3,
      name: "First Aid and CPR & AED",
      link: "/aid&cpr",
      instructor: {
        modules: 1,
      },
      price: 70.0,
      image: "/coursesimage/course3.png",
    },
    {
      id: 4,
      name: "Article 9",
      link: "/article9",
      instructor: {
        modules: 2,
      },
      price: 75.0,
      image: "/coursesimage/course4.png",
    },
    {
      id: 5,
      name: "Dignity Course",
      link: "/dignity-course",
      instructor: {
        modules: 1,
      },
      price: 100.0,
      image: "/coursesimage/course5.png",
    },
    {
      id: 6,
      name: "HIPPA",
      link: "/hippa",
      instructor: {
        modules: 1,
      },
      price: 20.0,
      image: "/coursesimage/course6.png",
    },
    {
      id: 7,
      name: "Bloodborne Pathogens",
      link: "/bloodborne-pathogens",
      instructor: {
        modules: 2,
      },
      price: 20.0,
      image: "/coursesimage/course7.png",
    },
    {
      id: 8,
      name: "Dementia Care and Management",
      link: "/dementia-care",
      instructor: {
        modules: 1,
      },
      price: 10.0,
      image: "/coursesimage/course8.png",
    },
    {
      id: 9,
      name: "Fall Prevention Awareness Training",
      link: "/prevention-awareness",
      instructor: {
        modules: 1,
      },
      price: 10.0,
      image: "/coursesimage/course9.png",
    },
    {
      id: 10,
      name: "Supporting Individuals Diagnosed with ADHD",
      link: "/individuals-diagnosed",
      instructor: {
        modules: 2,
      },
      price: 25.0,
      image: "/coursesimage/course10.png",
    },
    {
      id: 11,
      name: "Principles of Positive Behaviour Support",
      link: "/behaviour-support",
      instructor: {
        modules: 1,
      },
      price: 20.0,
      image: "/coursesimage/course11.png",
    },
    {
      id: 12,
      name: "Preventive Abuse and Neglect Backed",
      link: "/preventive-abuse",
      instructor: {
        modules: 1,
      },
      price: 20.0,
      image: "/coursesimage/course12.png",
    },
    {
      id: 13,
      name: "Foundational Leadership Development",
      link: "/leadership-development",
      instructor: {
        modules: 1,
      },
      price: 20.0,
      image: "/coursesimage/course13.png",
    },
    {
      id: 14,
      name: "Becoming an Effective Caregiver",
      link: "/effective-caregiver",
      instructor: {
        modules: 1,
      },
      price: 20.0,
      image: "/coursesimage/course14.png",
    },
    {
      id: 15,
      name: "End-of-Life Care",
      link: "/end-of-life-care",
      instructor: {
        modules: 1,
      },
      price: 50.0,
      image: "/coursesimage/course15.png",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header token={undefined} />
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
              <span className="text-lg">💻</span>{" "}
              <span>Online - Self Paced</span>
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
            <div className="w-[60%] flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Type Here to Find a Specific Course"
                className="px-4 py-2 w-full focus:outline-none"
              />
              <button className="px-4 py-2 bg-primarygold text-white hover:bg-primarygold">
                <FaSearch />
              </button>
            </div>

            {/* Filters */}
            {/* Filters */}
            <div className="w-[40%] flex justify-center items-center space-x-4">
              {/* Language Dropdown */}
              <div className="relative w-36">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 w-full text-left focus:outline-none"
                >
                  <span>{selectedLanguage}</span>
                  <FaChevronDown className="ml-2 text-sm" />
                  {/* language */}
                </button>
                {languageOpen && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-10">
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setLanguageOpen(false);
                        }}
                        className={`px-4 py-2 cursor-pointer ${
                          selectedLanguage === lang
                            ? "bg-primarygold text-white"
                            : "hover:bg-primarygold"
                        }`}
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Location Dropdown */}
              <div className="relative w-36">
                <button
                  onClick={() => setLocationOpen(!locationOpen)}
                  className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 w-full text-left focus:outline-none"
                >
                  <span>{selectedLocation}</span>
                  <FaChevronDown className="ml-2 text-sm" />
                </button>
                {locationOpen && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md z-10">
                    {locations.map((loc) => (
                      <div
                        key={loc}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setLocationOpen(false);
                        }}
                        className={`px-4 py-2 cursor-pointer ${
                          selectedLocation === loc
                            ? "bg-primarygold text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-8 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg  overflow-hidden border border-gray-200"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full  object-cover"
              />
              <div className="p-4 border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-800">
                  <Link href={course.link}>{course.name}</Link>
                </h4>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-700 text-sm">Price:</p>
                  <p className="text-lg font-bold text-blue-700">
                    ${course.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => alert(`Enrolled in ${course.name}`)}
                  className="bg-customBlue text-white text-sm px-4 py-2 rounded hover:bg-primarygold transition duration-300"
                >
                  ENROLL NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PediatricLifeSupport;
