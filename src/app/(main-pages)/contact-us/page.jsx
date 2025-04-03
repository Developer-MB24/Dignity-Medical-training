"use client";
import React, { useState } from "react";
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import axios from "axios";

const Page = () => {
  const [formdata, Setformdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    Setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/apiRoutes/nodemailer", formdata);

      if (response.status === 200) {
        window.location.href = "/thankyou";
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <Header />
      <section
        className="min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contactus.jpeg')",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 p-10 md:p-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
            {/* Left Section */}
            <div className="space-y-8">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <div>
                <h2 className="text-xl font-semibold">Email Us</h2>
                <p>contact@dignitymedicaltraining.com</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Call Us</h2>
                <p>+1 (888) 404-6348</p>
                <p>+1 (480) 351-2333</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Location</h2>
                <p>1801 S Extension Rd, Mesa Az 85210</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="p-8 rounded-lg shadow-lg text-black ">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:ring-0 focus:border-gray-800 p-2"
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:ring-0 focus:border-gray-800 p-2"
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:ring-0 focus:border-gray-800 p-2"
                    onChange={handleChange}
                    placeholder="Subject of Your Message"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 block w-full border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:ring-0 focus:border-gray-800 p-2"
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF6F00] text-white py-2 px-4 rounded-lg hover:bg-[#E65100] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
