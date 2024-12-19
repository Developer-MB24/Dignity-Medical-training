"use client";
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import React from "react";

const ClassroomCourses = () => {
  // Hardcoded course data with different images
  const courses = [
    {
      id: 1,
      name: "Abuse and Neglect (1 CEU - 1 Hour Course)",
      instructor: {
        // name: "Alison Pattison",
        modules: 1,
        // image: "/images/slider1.jpeg", // Instructor image
      },
      price: 15.0,
      image: "/images/slider1.jpeg", // Course image
    },
    {
      id: 2,
      name: "Advance Directives (.5 CEU - 30 Min Course)",
      instructor: {
        // name: "John Smith",
        modules: 1,
        // image: "/images/instructors/john.jpeg", // Instructor image
      },
      price: 10.0,
      image: "/images/slider1.jpeg", // Course image
    },
    {
      id: 3,
      name: "All About Autism (1 CEU - 1 Hour Course)",
      instructor: {
        // name: "Emma Brown",
        modules: 1,
        // image: "/images/instructors/emma.jpeg", // Instructor image
      },
      price: 20.0,
      image: "/images/slider1.jpeg", // Course image
    },
    {
      id: 4,
      name: "Dementia Care Basics (2 CEU - 2 Hour Course)",
      instructor: {
        // name: "Michael Lee",
        modules: 2,
        // image: "/images/instructors/michael.jpeg", // Instructor image
      },
      price: 25.0,
      image: "/images/slider1.jpeg", // Course image
    },
    {
      id: 5,
      name: "Pediatric Life Support (1 CEU - 1 Hour Course)",
      instructor: {
        // name: "Sophia Green",
        modules: 1,
        // image: "/images/instructors/sophia.jpeg", // Instructor image
      },
      price: 18.0,
      image: "/images/courses/pediatric-life-support.jpeg", // Course image
    },
    {
      id: 6,
      name: "CPR and First Aid (1 CEU - 1 Hour Course)",
      instructor: {
        // name: "Olivia Wilson",
        modules: 1,
        // image: "/images/instructors/olivia.jpeg", // Instructor image
      },
      price: 15.0,
      image: "/images/courses/cpr-first-aid.jpeg", // Course image
    },
  ];

  return (
    <>
      <Header token={undefined} />
      <section className="mx-8 my-10">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              {/* Course Image */}
              <img
                src={course.image} // Unique course image
                alt={course.name}
                className="w-full h-40 object-cover"
              />
              {/* Course Details */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-800">{course.name}</h4>
              </div>
              {/* Instructor Details */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    // src={course.instructor.image} // Unique instructor image
                    // alt={course.instructor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {/* {course.instructor.name} */}
                    </p>
                    <p className="text-sm text-gray-600">
                      Modules: {course.instructor.modules}
                    </p>
                  </div>
                </div>
              </div>
              {/* Pricing and Enroll Button */}
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-gray-700 text-sm">Price:</p>
                  <p className="text-lg font-bold text-blue-700">
                    ${course.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => alert(`Enrolled in ${course.name}`)}
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
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

export default ClassroomCourses;
