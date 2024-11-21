"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDropdown } from "../../../helpers/GeneralHelper";
import { useAuth } from "@/hooks/auth/authContext";
import CartPanel from "./CartPanel";
import {
  loadCartFromLocalStorage,
  calculateTotalPrice,
  removeFromCart,
} from "@/utils/cartUtils";
import { FaPhoneAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { useCart } from "@/hooks/cart/cartContext";
import Logo from "./Logo";
import axios from "axios";
import dynamic from "next/dynamic";

// Dynamically load FontAwesomeIcon
const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  {
    ssr: false,
  }
);

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

const Header = ({ token }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [coursesData, setCoursesData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // Track the highlighted item
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const { dropdownOpen, toggleDropdown } = useDropdown();
  const { handleLogout, user } = useAuth();
  const { cartItems, toggleCart, isCartOpen } = useCart();

  useEffect(() => {
    const items = loadCartFromLocalStorage() || [];
    setCartCount(items.length || 0);
  }, [isCartOpen]);

  const onLogout = () => {
    handleLogout(router);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  const handleRemoveFromCart = (itemToRemove) => {
    removeFromCart(itemToRemove);
    // The cart context should update the cartItems, triggering the useEffect above
  };

  const Sessionrole = () => {
    if (user) {
      if (user.role === "admin") {
        return "Admin";
      } else if (user.role === "instructor") {
        return "Instructor";
      } else if (user.role === "user") {
        return "User";
      }
    }
    return "Guest";
  };
  const role = Sessionrole();

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
    setHighlightedIndex(-1); // Reset highlight after selection
    router.push(`/allCoures/${encodeURIComponent(course)}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCourse(null);
    setHighlightedIndex(-1); // Reset highlight when search changes
  };

  const handleKeyDown = (event) => {
    if (filteredCourses.length > 0) {
      if (event.key === "ArrowDown") {
        setHighlightedIndex((prevIndex) =>
          prevIndex === filteredCourses.length - 1 ? 0 : prevIndex + 1
        );
      } else if (event.key === "ArrowUp") {
        setHighlightedIndex((prevIndex) =>
          prevIndex === 0 ? filteredCourses.length - 1 : prevIndex - 1
        );
      } else if (event.key === "Enter" && highlightedIndex >= 0) {
        handleSelectCourse(filteredCourses[highlightedIndex]);
      }
    }
  };
  return (
    <>
      <div className="text-center py-4 bg-goldlight text-white">
        <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-8 text-nowrap">
          <div className="flex items-center space-x-2 hover:bg-primarygold p-2 rounded text-white">
            <Link href="/" onClick={() => alert("Not yet implemented!")}>
              <h4 className="text-sm sm:text-base">NEW AGENCY SIGNUP</h4>
            </Link>
          </div>
          <a
            href="tel:+1(888)-404-6348"
            className="flex items-center space-x-2 text-white"
          >
            <FaPhoneAlt className="text-sm sm:text-base" color="#F27B21" />
            <span className="text-sm sm:text-base">+1(888)-404-6348</span>
          </a>
          <a
            href="tel:+1 (480)-351-2333"
            className="flex items-center space-x-2 text-white"
          >
            <FaPhoneAlt className="text-sm sm:text-base" color="#F27B21" />
            <span className="text-sm sm:text-base">+1 (480)-351-2333</span>
          </a>
          {!user ? (
            <>
              <Link
                href="/signin"
                className="flex items-center space-x-2 hover:bg-primarygold p-2 rounded text-white"
              >
                <FaSignInAlt className="text-sm sm:text-base" color="#F27B21" />
                <span className="text-sm sm:text-base">Login</span>
              </Link>
              <Link
                href="/signup"
                className="flex items-center space-x-2 hover:bg-primarygold p-2 rounded text-white"
              >
                <FaUserPlus className="text-sm sm:text-base" color="#F27B21" />
                <span className="text-sm sm:text-base">Register</span>
              </Link>
            </>
          ) : (
            <Link
              href={`/${role.toLowerCase()}/dashboard`}
              className="flex items-center space-x-2 hover:bg-primarygold p-2 rounded text-white"
            >
              <FaUserPlus className="text-sm sm:text-base" />
              <span className="text-sm sm:text-base">My Dasboard</span>
            </Link>
          )}
        </div>
      </div>

      <header className="bg-white text-black font-medium sticky top-0 z-40 shadow-sm shadow-black/20">
        <div className="py-4 px-5 flex items-center justify-between bg-[#ececec]">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4 font-semibold text-sm text-nowrap">
              <div className="group relative">
                <a
                  href="#allcourse"
                  className="text-black hover:text-goldlight"
                >
                  ALL COURSES
                </a>
                <div className="absolute left-0 p-2 rounded hidden group-hover:block bg-white shadow-lg text-black">
                  <a
                    href="#online"
                    className="block px-4 py-2 hover:bg-primarygold hover:text-white rounded"
                  >
                    Online Self-Placed
                  </a>
                  <a
                    href="#online"
                    className="block px-4 py-2 hover:bg-primarygold hover:text-white rounded"
                  >
                    Zoom Classes
                  </a>
                  <a
                    href="#online"
                    className="block px-4 py-2 hover:bg-primarygold hover:text-white rounded"
                  >
                    Classroom Courses
                  </a>
                </div>
              </div>
              <div className="group relative">
                <a href="#" className="text-black hover:text-goldlight">
                  ABOUT
                </a>
                <div className="absolute left-0 p-2 rounded hidden group-hover:block bg-white shadow-lg text-black">
                  <a
                    href="#aboutus"
                    className="block px-4 py-2 hover:bg-primarygold hover:text-white rounded"
                  >
                    Leadership
                  </a>
                  <a
                    href="#Instructors"
                    className="block px-4 py-2 hover:bg-primarygold hover:text-white rounded"
                  >
                    Instructors
                  </a>
                  <a
                    href="#testimonials"
                    className="block px-4 py-2 hover:bg-primarygold hover:text-white rounded"
                  >
                    Testimonials
                  </a>
                </div>
              </div>
              <div className="group relative">
                <a href="#" className="text-black hover:text-goldlight">
                  LOCATION
                </a>
                <div className="absolute left-0 p-2 rounded hidden group-hover:block bg-white shadow-lg text-black">
                  <a
                    href="#"
                    className="block px-2 py-2 hover:bg-primarygold hover:text-white rounded"
                  >
                    Arizona
                  </a>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="text-black hover:text-goldlight"
              >
                CONTACT US
              </Link>
              <Link href="/faq" className="text-black hover:text-goldlight">
                FAQ
              </Link>
              <Link href="#" className="text-black hover:text-goldlight">
                CONSULTING
              </Link>
              <Link href="#" className="text-black hover:text-goldlight">
                CAREER
              </Link>
              <div className="py-4 flex items-center justify-between bg-[#ececec]">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown} // Add keydown event listener
                    placeholder="Search"
                    className="w-40 pl-4 pr-10 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-primarygold bg-[#d9e2d6]"
                  />
                  <BiSearchAlt className="absolute right-3 text-gray-500" />
                  {searchTerm && filteredCourses.length > 0 && (
                    <div className="absolute top-full mt-2 w-full border border-gray-300 rounded-lg bg-[#d9e2d6] shadow-lg max-h-60 overflow-y-auto z-10">
                      {filteredCourses.map((course, index) => (
                        <div
                          key={course.id}
                          className={`p-2 cursor-pointer hover:bg-gray-100${
                            index === highlightedIndex ? "bg-gray-300" : ""
                          }`}
                          style={{ fontSize: "0.7rem" }}
                          onClick={() =>
                            handleSelectCourse(course.course_title)
                          }
                        >
                          {course.course_title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </nav>
            <div className="flex">
              <div>
                {token ? (
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center space-x-2"
                    >
                      <Image
                        src={user?.userimage || "/assets/icons8-user-100.png"}
                        // src="/assets/icons8-user-100.png"
                        alt="User Icon"
                        className="w-12 h-12 rounded-full shadow-md hover:shadow-lg shadow-goldlight border-4"
                        width={40}
                        height={50}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dropdown border-2 border-gray-100 p-2 z-40">
                        <span className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-primarygold rounded-lg hover:text-white">
                          <span className="text-goldlight">Hi!</span>{" "}
                          {user ? user.firstname.toUpperCase() : "User"}
                        </span>
                        {role !== "Guest" ? (
                          <>
                            {user.role !== "user" && (
                              <Link href={`/${role.toLowerCase()}/dashboard`}>
                                <p className="block px-4 py-2 text-gray-800 hover:bg-primarygold rounded-lg hover:text-white">
                                  Dashboard
                                </p>
                              </Link>
                            )}
                            {user.role === "user" && (
                              <>
                                <Link
                                  href="/user/courses"
                                  className="animate-text"
                                >
                                  <p className="block px-4 py-2 text-gray-800 hover:bg-primarygold rounded-lg hover:text-white">
                                    My Courses
                                  </p>
                                </Link>
                                <Link
                                  href="/user/wishlist"
                                  className="animate-text"
                                >
                                  <p className="block px-4 py-2 text-gray-800 hover:bg-primarygold rounded-lg hover:text-white">
                                    Wishlist
                                  </p>
                                </Link>
                              </>
                            )}
                            <Link href="user/profile">
                              <p className="block px-4 py-2 text-gray-800 hover:bg-primarygold rounded-lg hover:text-white">
                                Profile
                              </p>
                            </Link>
                            <button
                              onClick={onLogout}
                              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-primarygold rounded-lg hover:text-white"
                            >
                              Logout
                            </button>
                          </>
                        ) : (
                          <>
                            <Link href="/signin">
                              <p className="block px-4 py-2 text-gray-800 hover:bg-primarygold rounded-lg hover:text-white">
                                Signin
                              </p>
                            </Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href="/signin" className={`animate-text`}>
                    <FaUserCircle size={30} />
                  </Link>
                )}
              </div>
              <div className="relative flex items-center">
                <button
                  onClick={toggleCart}
                  className=" px-2 py-2"
                  suppressHydrationWarning
                >
                  <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-primarygold text-white text-xs rounded-full px-2 py-1 transform translate-x-1/2 -translate-y-1/2">
                      {cartCount}
                    </span>
                  )}
                </button>
                {isCartOpen && (
                  <>
                    {/* Dark Overlay */}
                    <div
                      className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
                      onClick={toggleCart}
                      aria-hidden="true"
                    />
                    {/* Cart Panel */}
                    <CartPanel
                      cartItems={cartItems}
                      onClose={toggleCart}
                      onRemoveFromCart={handleRemoveFromCart}
                      totalPrice={calculateTotalPrice(cartItems)}
                      className="hover:bg-primarygold"
                    />
                  </>
                )}
              </div>

              {/* <div>
                    <button
                      onClick={toggleMenu}
                      className="px-2 py-1 text-lg rounded-md md:hidden"
                    >
                      <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                    </button>
                  </div> */}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-xl focus:outline-none">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="block md:hidden bg-gray-100 px-2 pt-2 pb-4">
            <Link
              href="/"
              className="block px-2 py-1 text-black hover:bg-primarygold hover:text-white rounded"
            >
              ALL COURSES
            </Link>
            <Link
              href="#aboutus"
              className="block px-2 py-1 text-black hover:bg-primarygold hover:text-white rounded"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="block px-2 py-1 text-black hover:bg-primarygold hover:text-white rounded"
            >
              LOCATION
            </Link>
            <Link
              href="/contact-us"
              className="block px-2 py-1 text-black hover:bg-primarygold hover:text-white rounded"
            >
              CONTACT US
            </Link>
            <Link
              href="/faq"
              className="block px-2 py-1 text-black hover:bg-primarygold hover:text-white rounded"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="block px-2 py-1 text-black hover:bg-primarygold hover:text-white rounded"
            >
              CONSULTING
            </Link>
            <Link
              href="#"
              className="block px-2 py-1 text-black hover:bg-primarygold hover:text-white rounded"
            >
              CAREER
            </Link>
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search"
                className="w-64 pl-4 pr-10 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-primarygold bg-[#d9e2d6]"
              />
              <BiSearchAlt className="absolute right-3 text-gray-500" />
              {searchTerm && filteredCourses.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full border border-gray-300 rounded-lg bg-white shadow-lg max-h-60 overflow-y-auto z-10">
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
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
