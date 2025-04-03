"use client";
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const sliderImages = [
    "/images/slider1.jpeg",
    "/images/slider2.jpeg",
    "/images/slider3.jpeg",
    "/images/slider1.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Header token={undefined} />

      {/* Hero Section */}
      <section className="bg-white py-16 px-8 text-center md:text-left md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
          <div>
            <button
              className="bg-goldlight text-white text-sm px-4 py-2 rounded-md mb-6 md:mb-8"
              aria-label="Public notice from the team"
            >
              Public notice from the team &rarr;
            </button>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let’s build the future of education together
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Come, join us and together we can transform the way India learns.
            </p>
            <a
              href="#jobs"
              className="bg-goldlight hover:bg-primarygold text-white text-lg font-medium py-3 px-6 rounded-lg"
            >
              View all job openings
            </a>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="relative flex justify-center items-center">
              <img
                src="/images/slider1.jpeg"
                alt="Hero Illustration"
                className="relative z-10 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-goldlight py-16 px-8 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white">
            We’re only getting started
          </h2>
          <p className="text-lg text-white mt-4">
            Dignity Medical is dedicated to its mission and is at the forefront
            of revolutionising the ed-tech space in India.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { logo: "🏙️", value: "10K+", label: "Cities" },
            { logo: "👩‍💻", value: "4K+", label: "Employees" },
            { logo: "👩‍🏫", value: "50K+", label: "Educators" },
            { logo: "📚", value: "150K+", label: "Live Classes" },
            { logo: "👥", value: "5M+", label: "Active Users" },
            { logo: "🎓", value: "49M+", label: "Learners" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center mb-4 text-4xl transition-transform duration-300 transform group-hover:scale-110">
                {stat.logo}
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="bg-white py-16 px-8">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Experience life at Dignity Medical
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            We’re building a workspace that promotes growth, both personally and
            professionally.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Slider Image */}
          <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
            <img
              src={sliderImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Arrow */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-4 shadow-lg"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-4 shadow-lg"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnail Section */}
        <div className=" mt-8 flex justify-evenly  max-w-5xl mx-auto">
          {sliderImages.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-60 h-40 rounded-lg overflow-hidden border-2 ${
                index === currentIndex
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Leadership Principles Section */}
      <section className="bg-white py-16 px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Leadership Principles
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Our leadership principles form the crux of everything we do and have
            helped us create a strong workforce of 4,000+ young leaders and
            innovators.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl lg:max-w-5xl mx-auto">
          {[
            "/images/Leadership-Principles1.jpeg",
            "/images/Leadership-Principles2.jpeg",
            "/images/Leadership-Principles3.jpeg",
            "/images/Leadership-Principles4.jpeg",
            "/images/Leadership-Principles5.jpeg",
            "/images/Leadership-Principles6.jpeg",
            "/images/Leadership-Principles7.jpeg",
            "/images/Leadership-Principles8.jpeg",
          ].map((image, index) => (
            <div
              key={index}
              className="border-8 border-gray-800 shadow-lg p-2 bg-white rounded-lg"
            >
              <div className="w-full h-80 ">
                <img
                  src={image}
                  alt={`Leader ${index + 1}`}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hear from the Team Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left  - Title and Description */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Hear from the team!
            </h2>
            <p className="text-lg text-gray-700">
              Get a sneak-peek into all the magic and madness that happens at
              Dignity Medical.
            </p>
            <a href="#vlogs" className="text-blue-600 font-medium underline">
              Watch Vlogs
            </a>
          </div>

          {/* Right - Testimonials */}
          <div className=" space-y-6">
            {[
              {
                name: "Arooshi Singh",
                position: " Experience and Culture",
                message:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, dolorum.",
                image: "/images/slider1.jpeg",
                bg: "bg-primarygold",
              },
              {
                name: "Shweta Sivasankaran",
                position: "Director, Marketing",
                message:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, dolorum.",
                image: "/images/slider1.jpeg",
                bg: "bg-goldlight",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`flex items-start p-8 shadow-md rounded-lg ${testimonial.bg} min-h-[200px]`}
              >
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="ml-6">
                  <h3 className="font-bold text-white text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-white mb-3">
                    {testimonial.position}
                  </p>
                  <p className="text-white text-base">{testimonial.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Unacademy Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Dignity Medical?
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            delectus!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Employee-friendly policies",
              description:
                "Maternity Leave | Paternity Leave | Adoption Leave | Period Leave | Creche Support",
              icon: (
                <div className="bg-white text-primarygold p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-4.4 0-9 2.3-9 6v3h18v-3c0-3.7-4.6-6-9-6z"
                    />
                  </svg>
                </div>
              ),
            },
            {
              title: "We’ve got your back",
              description:
                "Insurance Cover for you and your family | Pension Scheme | Flexible Benefit Plan | COVID-19 Insurance",
              icon: (
                <div className="bg-white text-goldlight p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 5a4 4 0 11-8 0 4 4 0 014-4h4zm1.5 10a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z"
                    />
                  </svg>
                </div>
              ),
            },
            {
              title: "360-degree wellness",
              description:
                "Exclusive partnership with Practo, Ultrahuman | Monthly wellness programmes | Game Zone | Open Pantry",
              icon: (
                <div className="bg-white text-goldlight p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.59 4.59L9 16.17l-4.59-4.58L3 13l6 6L22 6.41z"
                    />
                  </svg>
                </div>
              ),
            },
            {
              title: "Unparalleled learning opportunities",
              description:
                "Competitive compensation | Best-in-class mentors | Accelerated growth | Timely reviews",
              icon: (
                <div className="bg-white text-primarygold p-4 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15M9.5 6l5 2M6 9.5h12M7.5 14h9"
                    />
                  </svg>
                </div>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-md rounded-lg flex items-start gap-4"
            >
              {item.icon}
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HeroSection;
