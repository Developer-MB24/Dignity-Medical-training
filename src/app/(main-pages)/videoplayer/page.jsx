"use client";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Image from "next/image";
import Header from "@/components/client/common/Header";
import Footer from "@/components/client/common/Footer";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

const fetchCourseDetails = async (id) => {
  try {
    const response = await axios.get(`/apiRoutes/enrollwithid/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    return null;
  }
};

const CourseVideoPlayer = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const { id } = useParams(); // Extract the course ID from the URL

  useEffect(() => {
    const getCourseDetails = async () => {
      const data = await fetchCourseDetails(id);
      setCourse(data);
      setLoading(false);
    };

    getCourseDetails();
  }, [id]);

  const videoOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleVideoProgress = (event) => {
    const duration = event.target.getDuration();
    const currentTime = event.target.getCurrentTime();

    if (currentTime / duration >= 0.8) {
      setShowButton(true);
    }
  };

  if (loading) return <p>Loading...</p>;

  if (!course) return <p>Course not found</p>;

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        {/* YouTube Video Player Section */}
        <div className="relative w-full h-64 md:h-96 bg-black mb-6">
          <YouTube
            videoId={course[0].videoId} // Assuming you have a video ID field in the course data
            opts={videoOptions}
            onStateChange={handleVideoProgress}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Video Description Section */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">
            {course[0].course_title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {course[0].description}
          </p>
        </div>

        {/* Instructor Details Section */}
        <div className="bg-white p-6 shadow-md rounded-md mt-6 flex items-center">
          <div className="w-16 h-16 relative mr-4">
            <Image
              src={
                course[0].instructor_image ||
                "/public/images/pages/instructor (1).jpg"
              } // Replace with actual field
              alt={`${course[0].instructor_first_name} ${course[0].instructor_last_name}`}
              className="rounded-full object-cover"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              {course[0].instructor_first_name} {course[0].instructor_last_name}
            </h3>
            <p className="text-gray-600">{course[0].instructor_bio}</p>
          </div>
        </div>

        {/* Conditional Button */}
        {showButton && (
          <div className="mt-6">
            <Link href={"/taketest"}>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                Take Test to Get Certificate
              </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CourseVideoPlayer;
