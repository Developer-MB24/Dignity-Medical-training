"use client";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Header from "@/components/client/common/Header";
import Footer from "@/components/client/common/Footer";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

const fetchCourseDetails = async (id) => {
  try {
    const response = await axios.get(`/apiRoutes/addcourse?id=${id}`);
    return response.data.courses;
  } catch (error) {
    console.error("Error fetching course details:", error);
    return null;
  }
};

const CourseVideoPlayer = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [notes, setNotes] = useState(""); // State to store the notes content
  const [activeVideo, setActiveVideo] = useState(null); // State to store the currently selected video
  const { id } = useParams(); // Extract the course ID from the URL

  useEffect(() => {
    const getCourseDetails = async () => {
      const data = await fetchCourseDetails(id);
      if (data && Array.isArray(data) && data.length > 0) {
        setCourse(data);
        const firstVideoId = Array.isArray(data[0].course_overview_urls)
          ? data[0].course_overview_urls[0]?.split("?v=")[1]
          : null;
        setActiveVideo(firstVideoId);
      }
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
      <div className="relative w-full h-[80vh] mb-6">
        {/* YouTube Video Player Section - 80% viewport height */}
        {activeVideo && (
          <YouTube
            videoId={activeVideo}
            opts={videoOptions}
            onStateChange={handleVideoProgress}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Tabbed Section for Course Details, Notes, and Videos */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex border-b mb-4">
          <button
            className={`py-2 px-4 ${
              activeTab === "details"
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Course Details
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "notes"
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("notes")}
          >
            Notes
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "videos"
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        {activeTab === "details" && (
          <div>
            {/* Course Details Section */}
            <h2 className="text-2xl font-semibold mb-4">
              {course[0].course_title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {course[0].short_description}
            </p>
            <h2 className="text-2xl font-semibold mb-4">Language</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {course[0].selected_language}
            </p>
            <h2 className="text-2xl font-semibold mb-4">Level</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {course[0].selected_programming_level}
            </p>
            <h2 className="text-2xl font-semibold mb-4">Course Type</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {course[0].coursetype}
            </p>
          </div>
        )}

        {activeTab === "notes" && (
          <div>
            {/* Notes Section with a Simple Textarea */}
            <h2 className="text-2xl font-semibold mb-4">Course Notes</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your notes here..."
              className="w-full h-40 p-2 border rounded mb-4"
            />
            <button
              className="bg-goldlight hover:bg-primarygold text-white font-semibold py-2 px-4 rounded"
              onClick={() => {
                // Save notes or do something with the notes
                console.log("Saved Notes:", notes);
              }}
            >
              Save Notes
            </button>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            {/* Video Selection Section */}
            <h2 className="text-2xl font-semibold mb-4">Course Videos</h2>
            <div className="flex flex-col space-y-4">
              {Array.isArray(course[0].course_overview_urls) &&
                course[0].course_overview_urls.map((videoUrl, index) => (
                  <button
                    key={index}
                    className={`py-2 px-4 border rounded ${
                      activeVideo === videoUrl.split("?v=")[1]
                        ? "bg-goldlight hover:bg-primarygold text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setActiveVideo(videoUrl.split("?v=")[1])}
                  >
                    Video {index + 1}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Conditional Button */}
        {showButton && (
          <div className="mt-6">
            <Link href="/taketest">
              <button className="bg-goldlight hover:bg-primarygold text-white font-semibold py-2 px-4 rounded">
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
