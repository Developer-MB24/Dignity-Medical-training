"use client";
import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const testimonials = [
  {
    quote:
      "I have taken many CPR classes and Dignity Medical Training has the best CPR instructors I have ever had. They made the class interesting with presentations & stories...",
    name: "Alexa",
    image: "/images/slider1.jpeg", // Replace with actual image paths
  },
  {
    quote:
      "I took an AED course from DMT. The class and instructor were both great! They made obtaining certifications stress-free for me...",
    name: "Emma",
    image: "/images/slider1.jpeg", // Replace with actual image paths
  },
  {
    quote:
      "Taking the First Aid course at Dignity Medical Training was very helpful for me. The instructor was super knowledgeable and engaging. I feel they made the content easy to understand and apply in real-life situations.",
    name: "Sarah",
    image: "/images/slider1.jpeg", // Replace with actual image paths
  },
  {
    quote:
      "The training provided was thorough and easy to understand. I feel much more confident in applying what I've learned.",
    name: "Jessica K.",
    image: "/images/slider1.jpeg", // Replace with actual image paths
  },
  {
    quote:
      "The instructor made the course interesting and engaging. I would highly recommend this to others.",
    name: "Mike D.",
    image: "/images/slider1.jpeg", // Replace with actual image paths
  },
  {
    quote:
      "Great experience overall. The course content was relevant and the instructor was very supportive.",
    name: "Emily R.",
    image: "/images/slider1.jpeg", // Replace with actual image paths
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="bg-customBlue text-white py-12 px-4 sm:px-8"
      id="testimonials"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 text-white bg-primarygold p-3 rounded-full shadow-md"
        >
          <MdArrowBackIosNew size={20} />
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col items-center bg-white text-gray-800 px-6 py-8 rounded-lg shadow-lg w-4/5 sm:w-2/3 lg:w-1/2">
          {/* Image */}
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg mb-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Quote */}
          <div className="text-yellow-500 text-3xl mb-2">“</div>
          <p className="text-center text-lg leading-relaxed">
            {testimonials[currentIndex].quote}
          </p>
          {/* Name */}
          <div className="mt-4 font-semibold text-xl text-gray-700">
            {testimonials[currentIndex].name}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 text-white bg-primarygold  p-3 rounded-full shadow-md"
        >
          <MdArrowForwardIos size={20} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-blue-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

// old testimonials
// "use client";
// import React, { useState, useEffect } from "react";
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

// const testimonials = [
//   {
//     quote:
//       "I have taken many CPR classes and Dignity Medical Training has the best CPR instructors I have ever had. They made the class interesting with presentations & stories...",
//     name: "Alexa",
//   },
//   {
//     quote:
//       "I took an AED course from DMT. The class and instructor were both great! They made obtaining certifications stress-free for me...",
//     name: "Emma",
//   },
//   {
//     quote:
//       "Taking the First Aid course at Dignity Medical Training was very very helpful for me. The instructor was super knowledgeable and engaging. I feel they made the content easy to understand and apply in real-life situations. Dignity Medical Training has trained me in a way that I am totally confident that in case I have to handle emergencies, I can do it well. I highly recommend their courses for anyone looking to gain essential first aid skills.",
//     name: "Sarah.",
//   },
//   {
//     quote:
//       "The training provided was thorough and easy to understand. I feel much more confident in applying what I've learned.",
//     name: "Jessica K.",
//   },
//   {
//     quote:
//       "The instructor made the course interesting and engaging. I would highly recommend this to others.",
//     name: "Mike D.",
//   },
//   {
//     quote:
//       "Great experience overall. The course content was relevant and the instructor was very supportive.",
//     name: "Emily R.",
//   },
// ];

// const Testimonials = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(1); // Track number of items to show

//   const updateItemsToShow = () => {
//     if (window.innerWidth >= 640) {
//       setItemsToShow(3); // 3 items on large screens
//     } else {
//       setItemsToShow(1); // 1 item on small screens
//     }
//   };

//   useEffect(() => {
//     updateItemsToShow(); // Set initial items to show based on screen size
//     window.addEventListener("resize", updateItemsToShow); // Update on resize

//     return () => {
//       window.removeEventListener("resize", updateItemsToShow); // Cleanup listener
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === testimonials.length - itemsToShow
//         ? 0
//         : prevSlide + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? testimonials.length - itemsToShow : prevSlide - 1
//     );
//   };

//   return (
//     <div className="bg-gray-100 py-10" id="testimonials">
//       <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
//       <div className="relative flex justify-center items-center">
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 text-gray-500 hover:text-gray-700 focus:outline-none bg-black/20 hover:bg-black/40 h-full px-3"
//         >
//           <MdArrowBackIosNew size={20} />
//         </button>
//         <div className="flex overflow-hidden">
//           <div className="flex flex-col sm:flex-row sm:space-x-4">
//             {testimonials
//               .slice(currentSlide, currentSlide + itemsToShow)
//               .map((testimonial, index) => (
//                 <div key={index} className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow">
//                   <div className="text-yellow-500 text-3xl mb-4">“</div>
//                   <p className="text-gray-700">{testimonial.quote}</p>
//                   <div className="text-right mt-4 font-semibold">
//                     {testimonial.name}
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//         <button
//           onClick={handleNext}
//           className="absolute right-0 text-gray-500 hover:text-gray-700 focus:outline-none bg-black/20 hover:bg-black/40 h-full px-3"
//         >
//           <MdArrowForwardIos size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
