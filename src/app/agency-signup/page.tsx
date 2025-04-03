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
      <Header token={undefined} />
      {/* <h1 className="text-2xl">Agency</h1> */}
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
              <h1 className="text-4xl font-bold">Agency</h1>
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
                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                  required
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />

                {/* Agency Info */}
                <p className="text-white font-semibold pt-4">- Agency Info -</p>
                <input
                  type="text"
                  name="agencyName"
                  placeholder="Agency Name"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />
                <input
                  type="text"
                  name="agencyAddress"
                  placeholder="Agency Address"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />
                <input
                  type="email"
                  name="agencyEmail"
                  placeholder="Agency Email Address"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />
                <input
                  type="tel"
                  name="agencyPhone"
                  placeholder="Agency Phone Number"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />

                {/* Agency Owner Info */}
                <p className="text-white font-semibold pt-4">
                  - Agency Owner Information -
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="ownerFirstName"
                    placeholder="First Name"
                    className="p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                  />
                  <input
                    type="text"
                    name="ownerLastName"
                    placeholder="Last Name"
                    className="p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                  />
                </div>
                <input
                  type="email"
                  name="ownerEmail"
                  placeholder="Agency Owner Email Address"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />
                <input
                  type="tel"
                  name="ownerPhone"
                  placeholder="Agency Owner Phone Number"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />

                {/* Scheduler Info */}
                <p className="text-white font-semibold pt-4">
                  - Scheduler Information -
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="schedulerFirstName"
                    placeholder="First Name"
                    className="p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                  />
                  <input
                    type="text"
                    name="schedulerLastName"
                    placeholder="Last Name"
                    className="p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                  />
                </div>
                <input
                  type="email"
                  name="schedulerEmail"
                  placeholder="Scheduler Email Address"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />
                <input
                  type="tel"
                  name="schedulerPhone"
                  placeholder="Scheduler Phone Number"
                  className="w-full p-2 border-b-2 border-gray-400 bg-transparent text-gray-800"
                />

                {/* CAPTCHA */}
                {/* <div className="mt-4">
                  
                  <div className="w-full flex justify-start items-center">
                    <input type="checkbox" className="mr-2" required />
                    <span className="text-white text-sm">I'm not a robot</span>
                  </div>
                </div> */}

                {/* Submit */}
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
