"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const getUser = async (id) => {
  try {
    const response = await fetch(`/apiRoutes/addcourse?id=${id}`);
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("Error fetching course:", error);
    return { error: "Error fetching course" };
  }
};

const getCourseImage = (id) => {
  return `/assets/courses/course-${id}.jpg`; // Image path for each course
};

const CourseDetails = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState(getCourseImage(id));
  const [isImageError, setIsImageError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        setLoading(true);
        const data = await getUser(params.id);
        if (!data.error) {
          setCourseData(data.courses);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  const handleImageError = () => {
    setIsImageError(true); // Trigger fallback image if the course image is not found
  };
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!courseData) {
    return <div>Course not found.</div>;
  }

  // Destructure the course data
  const {
    course_title,
    short_description,
    description,
    course_price,
    requirements,
    faq,
    lesson,
    section,
    selected_language,
    selected_programming_level,
    coursetype,
  } = courseData[0];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-6 font-sans">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-3xl font-bold mb-2">{course_title}</h1>
          <p className="text-lg mb-3">{stripHtmlTags(description)}</p>
          <nav className="text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">
              Development
            </a>{" "}
            &gt;
            <a href="#" className="hover:text-gray-700">
              {" "}
              {selected_programming_level}
            </a>{" "}
            &gt;
            <a href="#" className="hover:text-gray-700">
              {" "}
              {selected_language}
            </a>
          </nav>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* What You'll Learn */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>{requirements}</li>
              </ul>
            </div>

            {/* Course Content Preview */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Course content</h3>
              <p className="text-gray-700 mb-4">
                {section} Sections, {lesson} Lessons, 40m total length
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>{faq}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Language</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {selected_language}
              </p>
              <h2 className="text-xl font-semibold mb-4">Level</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {selected_programming_level}
              </p>
              <h2 className="text-xl font-semibold mb-4">Course Type</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{coursetype}</p>
            </div>
          </div>

          {/* Right Section (Sidebar) */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="mb-6">
              {!isImageError ? (
                <Image
                  src={imageSrc} // Dynamically load image based on course ID
                  width="500"
                  height="500"
                  alt={`Course ${id} Image`} // Use dynamic alt text
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
            </div>
            <div className="mb-6">
              <p className="text-3xl text-red-600 font-bold mb-2">
                ${course_price}
              </p>
            </div>
            <Link href={`/user/enrollpage/${id}`}>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold mb-4">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-gray-700 mb-4">Training Online?</p>
          <button className="bg-goldlight hover:bg-primarygold text-white py-3 px-6 rounded-lg font-semibold">
            Explore More Courses
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
