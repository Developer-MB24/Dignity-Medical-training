"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { useAuth } from "@/hooks/auth/authContext";
import { useRouter } from "next/navigation";

const Banner = () => {
  const { user } = useAuth();
  const [selectedCourseType, setSelectedCourseType] =
    useState("online_classes");
  const [location, setLocation] = useState("");
  const [selected_language, setLanguage] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  const images = [
    "/images/slider1.jpeg",
    "/images/slider2.jpeg",
    "/images/slider3.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleCourseTypeChange = (type) => {
    setSelectedCourseType(type);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleSeeAvailableClasses = async () => {
    router.push(`/allCoures/${encodeURIComponent(selectedCourse)}`);
  };

  const handleCheckoutVideoOption = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const classroomCourses = [
    "HIPPA",
    "Bloodborne Pathogens",
    "Basic Life Support",
    "Pediatric Life Support",
    "Advanced Cardiac Life Support",
    "CPR and First Aid",
    "Food Handlers Card",
    "Dementia Care and Management",
    "Fall Prevention Awareness Training",
    "Supporting Individuals Diagnosed with Attention Deficit Hyperactivity Disorder",
    "End of Life Care",
    "Principles of Positive Behavior Support",
  ];

  const zoomClasses = [
    "Article 9",
    "Positive Behaviour Support",
    "Preventive Abuse, Neglect, and Exploitation",
    "Foundational Leadership Development",
    "Becoming a Skilled Caregiver",
  ];

  const courseOptions =
    selectedCourseType === "online_classes" ? classroomCourses : zoomClasses;

  return (
    <>
      <div id="online">
        {/* Greeting Section */}
        {user && user.role === "user" && (
          <div className="bg-[#faf7f3] py-2">
            <div className="container mx-auto flex justify-center items-center px-4">
              <p className="text-6xl font-bold">
                Welcome Back{" "}
                <span className="text-primarygold">{user?.firstname}!</span>
              </p>
            </div>
          </div>
        )}
        {/* Hero Section */}
        <div className="relative bg-[#faf7f3] h-[100vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-1000"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Advance Your Knowledge
              </h1>
              <h2 className="text-2xl md:text-3xl mt-4 font-medium">
                Elevate Your Skills, Empower Your Future
              </h2>
            </div>
          </div>
        </div>
        {/* Hero Section Ends */}

        {/* Enroll Section */}
        <div className="bg-[#faf7f3] py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left p-4">
              <h2 className="text-4xl font-bold mb-2">
                Enroll in Training Now
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Provides a range of certification and training programs,
                including online options.
              </p>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-around mb-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="course-type"
                      className="form-radio text-red-500"
                      defaultChecked
                      onChange={() => handleCourseTypeChange("online_classes")}
                    />
                    <span className="ml-2 text-sm flex items-center">
                      <i className="fas fa-chalkboard-teacher mr-2"></i>{" "}
                      Classroom Courses
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="course-type"
                      className="form-radio text-red-500"
                      onChange={() => handleCourseTypeChange("zoom_classes")}
                    />
                    <span className="ml-2 text-sm flex items-center">
                      <i className="fas fa-video mr-2"></i> Zoom Classes
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="course-type"
                      className="form-radio text-red-500"
                      onChange={() => handleCourseTypeChange("self_paced")}
                    />
                    <span className="ml-2 text-sm flex items-center">
                      <i className="fas fa-laptop mr-2"></i> Online - Self Paced
                    </span>
                  </label>
                </div>
                <div className="flex space-x-2">
                  {selectedCourseType === "online_classes" && (
                    <select
                      className="border border-gray-300 rounded px-3 py-2 w-1/3"
                      value={location}
                      onChange={handleLocationChange}
                    >
                      <option value="">Location</option>
                      <option value="arizona">Arizona</option>
                    </select>
                  )}
                  <select
                    className="border border-gray-300 rounded px-3 py-2 w-1/3"
                    value={selected_language}
                    onChange={handleLanguageChange}
                  >
                    <option value="">Language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                  <select
                    className="border border-gray-300 rounded px-3 py-2 w-1/3"
                    value={selectedCourse}
                    onChange={handleCourseChange}
                  >
                    <option value="">Select Course</option>
                    {courseOptions.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={handleSeeAvailableClasses}
                  className="mt-4 bg-primarygold text-white py-2 px-6 rounded-full w-full hover:bg-goldlight hover:text-white transition-colors duration-300"
                >
                  SEE AVAILABLE CLASSES
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
              <Image
                src="/images/pages/enroll timing now.jpg"
                alt="Training"
                width={600}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Greeting Section  */}

        {/* <div
          className="relative w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/pages/at2.png')` }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="text-center text-white">
              <h1 className="text-2xl md:text-3xl font-bold">
                Greetings from Your Dignity Medical Training Partner
              </h1>
            </div>
          </div>
        </div> */}

        {/* Greeting Video Section */}

        <div className="flex justify-center items-center bg-white min-h-screen">
          {/* Video Container */}
          <div className="relative w-full max-w-5xl bg-black">
            <video
              className="w-full h-[500px] rounded-lg shadow-lg"
              src="/images/greetingvideo.mp4"
              autoPlay
              muted
              loop
              controls
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

       

        <button
          onClick={handleCheckoutVideoOption}
          className="fixed bottom-4 right-4 bg-goldlight text-white py-3 px-3 rounded-full shadow-lg hover:bg-primarygold transition-colors duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      </div>
    </>
  );
};

export default Banner;
