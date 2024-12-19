"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Header from "@/components/client/common/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const fetchCourses = async () => {
  try {
    const response = await axios.get("/apiRoutes/addcourse");
    if (response.data.success && Array.isArray(response.data.courses)) {
      return response.data.courses;
    } else {
      console.error("Failed to fetch courses:", response.data.error);
      return [];
    }
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export default function CourseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const courses = await fetchCourses();
      setCoursesData(courses);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredCourses = coursesData.filter((course) =>
    course.course_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setSearchTerm("");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCourse(null);
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="mb-8 relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a course..."
            className="pl-10 p-3 border border-gray-300 rounded-lg w-full focus:border-blue-500"
          />
          {searchTerm && filteredCourses.length > 0 && (
            <div className="border border-gray-300 rounded-lg mt-2 bg-white shadow-lg max-h-60 overflow-y-auto">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectCourse(course)}
                >
                  {course.course_title}
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedCourse ? (
          <CourseCard course={selectedCourse} />
        ) : (
          filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        )}
      </div>
    </>
  );
}

function CourseCard({ course }) {
  const router = useRouter();

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };
  const handleRouteOnclick = (courseId) => {
    router.push(`/user/enrollpage/${courseId}`);
  };
  return (
    <div className="flex p-4 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <Link href={`/courseDetailPage/${course.id}`}>
          <Image
            src="/images/pages/course-1.webp" // Ensure this path is correct
            alt={course.course_title}
            width={100}
            height={100}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </Link>
      </div>
      <div className="ml-4 flex-grow">
        <Link href={`/courseDetailPage/${course.id}`}>
          <h2 className="text-xl font-semibold hover:text-primarygold">
            {course.course_title}
          </h2>
          <p className="text-gray-600 mt-1 hover:text-primarygold">
            {stripHtmlTags(course.description)}
          </p>
        </Link>
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <span className="mx-2">•</span>
          <span>{course.hours} hours</span>
          <span className="mx-2">•</span>
          <span>{course.lectures} lectures</span>
          <span className="mx-2">•</span>
          <span>{course.selected_programming_level}</span>
        </div>
        <div className="mt-2 text-lg font-bold text-green-600">
          ${course.course_price}
          {course.discounted_price && (
            <span className="text-sm line-through text-gray-500 ml-2">
              ${course.discounted_price}
            </span>
          )}
        </div>
        {course.has_discount && (
          <span className="inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
            Bestseller
          </span>
        )}
        <div className="text-right">
          <button
            onClick={() => handleRouteOnclick(course.id)}
            className="bg-primarygold text-black px-4 py-2 rounded-lg hover:bg-goldlight hover:text-white transition-colors"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
