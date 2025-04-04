"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/apiRoutes/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, email }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage("An error occurred while sending the email.");
    }
  };

  return (
    <>
      <footer className=" text-white pt-12">
        {/* Sign Up Section */}
        <div className="bg-goldlight py-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Join Over Top-notch Care Providers
            </h2>
            <h2 className="text-2xl font-bold mb-4">
              Supercharge Your Skills with Dignity Medical Training Institute!
            </h2>
            <p className="mb-6 px-2">
              Join our community of caregivers and healthcare professionals
              dedicated to continuous learning. Stay informed about new courses,
              special promotions, and exclusive events tailored to enhance your
              professional growth.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-center mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-2 rounded-l border-none focus:ring-0 mr-2 text-black mb-2 sm:mb-0 sm:mr-2"
                  style={{ width: "200px" }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 border-none focus:ring-0 text-black mb-2 sm:mb-0 sm:mr-2"
                  style={{ width: "300px" }}
                />
                <button
                  type="submit"
                  className="bg-primarygold hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-r w-full sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
            <span className="text-red-400">
              {message && <p className="text-red-400 mt-4">{message}</p>}
            </span>

            <div className="text-center mt-4">
              <p className="text-lg font-semibold mb-2">
                Sign Up Now to unlock new opportunities in your career journey!
              </p>
              <p className="text-lg mb-2">
                Connect with Dignity Medical Training Institute Today
              </p>
              <p className="text-lg mb-4">
                Follow us on social media for updates, tips, and more!
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-white hover:text-blue-700"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-white hover:text-pink-700"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-white hover:text-blue-800"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-white hover:text-blue-500"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
              <p className="text-lg mt-4">
                Transform your life with Dignity Medical Training Institute.
                Excellence in education, dedication to your success.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="bg-white border-t border-gray-700 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 items-start">
            {/* Logo & Social Media Section */}
            <div className="flex flex-col items-center space-y-6">
              <Image
                src="/images/pages/lolo.png"
                alt="Dignity Medical Training Logo"
                width={150}
                height={150}
                className="mb-2 "
              />
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-goldlight " size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-goldlight " size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-goldlight " size={24} />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <FaYoutube className="text-goldlight " size={24} /> */}
                </a>
              </div>
            </div>

            {/* Courses Section */}
            <div className="font-medium text-black">
              <h4 className="text-xl font-semibold mb-4">Courses</h4>
              <ul className="space-y-3 font-medium text-black">
                <li>
                  <a href="#allcourse" className=" transition-colors">
                    All Courses
                  </a>
                </li>
                <li>
                  <a href="#online" className=" transition-colors">
                    Online - Self Paced
                  </a>
                </li>
                <li>
                  <a href="#classroom" className=" transition-colors">
                    Classroom Courses
                  </a>
                </li>
                <li>
                  <a href="#zoom" className=" transition-colors">
                    Zoom Classes
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="font-medium text-black">
              <h4 className="text-xl font-semibold  mb-4">Quick Links</h4>
              <ul className="space-y-3 font-medium text-black">
                <li>
                  <a href="/" className=" transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#aboutus" className=" transition-colors">
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#leadership"
                    className=" transition-colors"
                  >
                    Leadership
                  </a>
                </li> */}
                <li>
                  <a href="#Our-Instructors" className=" transition-colors">
                    Instructors
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className=" transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/faq" className=" transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/privacypolicy" className=" transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/termsandcondition" className=" transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h4 className="text-xl font-semibold text-black mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <div className="flex items-center gap-1 text-black">
                    <FaEnvelope className="text-goldlight" size={20} />
                    <a
                      href="mailto:contact@dignitymedicaltraining.com"
                      className="transition-colors"
                    >
                      contact@dignitymedicaltraining.com
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex items-center font-medium text-black">
                    <FaPhoneAlt className="mr-3 text-goldlight" size={20} />
                    <a href="tel:+18884046348" className="transition-colors">
                      +1 (888) 404-6348
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex items-center font-medium text-black">
                    <FaPhoneAlt className="mr-3 text-goldlight" size={20} />
                    <a href="tel:+14803512333" className="transition-colors">
                      +1 (480) 351-2333
                    </a>
                  </div>
                </li>

                <li>
                  <div className="flex items-start font-medium text-black">
                    <FaMapMarkerAlt className="mr-3 text-goldlight" size={20} />
                    <a
                      href="https://www.google.com/maps?q=1801+S+Extension+Rd,+Mesa+Az+85210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                    >
                      1801 S Extension Rd, Mesa Az 85210
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white text-black border-t border-gray-700 font-semibold pt-4 text-center">
          <p>Copyright 2024 &copy; Dignity. All Rights Reserved.</p>
          <p>
            Website Design by:{" "}
            <span>
              <Link href="https://masterbazar.com/">Master Bazar</Link>
            </span>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
