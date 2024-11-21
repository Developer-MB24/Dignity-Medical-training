// src/components/Header.js
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  handleLogout,
  useDropdown,
  useUserDetails,
} from "@/helpers/GeneralHelper";
import Logo from "@/components/client/common/Logo";
import CartPanel from "@/components/client/common/CartPanel";
import { useCart } from "@/hooks/cart/cartContext";
import {
  calculateTotalPrice,
  loadCartFromLocalStorage,
} from "@/utils/cartUtils";

const Header = ({ token }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dropdownOpen, toggleDropdown } = useDropdown();
  const { cartItems, toggleCart, isCartOpen } = useCart();
  const { user } = useUserDetails(router);
  const [cartCount, setCartCount] = useState(0);

  console.log("user", user);
  const onLogout = () => {
    handleLogout(router);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const items = loadCartFromLocalStorage() || [];
    setCartCount(items.length || 0);
  }, [isCartOpen]);

  // const onLogout = () => {
  //   handleLogout(router);
  // };

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  // const handleRemoveFromCart = (itemToRemove) => {
  //   removeFromCart(itemToRemove);
  //   const updatedItems = loadCartFromLocalStorage() || [];
  //   setCartCount(updatedItems.length || 0);
  // };
  const handleRemoveFromCart = (itemToRemove) => {
    removeFromCart(itemToRemove);
    // The cart context should update the cartItems, triggering the useEffect above
  };
  return (
    <header className="py-4 bg-white text-black font-medium  z-[100] shadow-sm shadow-black/20">
      <div className="flex justify-between items-center px-5 sm:px-10 md:px-16 xl:px-20">
        <div className="justify-between text-black text-2xl font-bold">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="flex space-x-6 items-center font-medium">
          <div className="hidden md:static md:flex space-x-6 items-center">
            {/* <Link
              href="/about"
              className={`${user ? "hidden" : ""} animate-text`}
            >
              About Us
            </Link>
            <Link href="/" className={`${user ? "hidden" : ""} animate-text`}>
              Courses
            </Link>
            <Link
              href="/contact-us"
              className={`${user ? "hidden" : ""} animate-text`}
            >
              Contact Us
            </Link> */}
            {token ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2"
                >
                  <Image
                    src="/assets/icons8-user-100.png"
                    alt="User Icon"
                    className="w-8 h-8 rounded-full shadow-lg border-black/20 border-[2px] p-1"
                    width={40}
                    height={50}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dropdown">
                    <span className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <span className="text-gray-400">Hi!</span>{" "}
                      {user ? user.firstname.toUpperCase() : "User"}
                    </span>
                    <Link href="/admin/dashboard">
                      <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Dashboard
                      </p>
                    </Link>
                    <Link href="">
                      <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Profile
                      </p>
                    </Link>
                    <button
                      onClick={onLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/"
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-primarygold hover:text-white rounded"
                >
                  Explore
                </Link>
                <button
                  onClick={onLogout}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-primarygold hover:text-white rounded"
                >
                  Logout
                </button>
              </>
            )}
          </div>
          <div className="relative flex items-center">
            <button onClick={toggleCart} className="relative px-2 py-2">
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
                />
              </>
            )}
          </div>
          <div>
            <button
              onClick={toggleMenu}
              className="px-2 py-1 text-lg rounded-md md:hidden"
            >
              <FontAwesomeIcon icon={isMenuOpen ? "" : faBars} />
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white text-black z-[100] transform ${
          isMenuOpen
            ? "translate-x-0 shadow-sm shadow-black/20"
            : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col space-y-6 p-5">
          <button
            onClick={toggleMenu}
            className="px-2 py-1 text-left text-xlrounded-md md:hidden"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {token ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2"
              >
                <Image
                  src="/assets/icons8-user-100.png"
                  alt="User Icon"
                  className="w-12 h-12 rounded-full shadow-lg border-black/20 border-[2px] p-1"
                  width={40}
                  height={50}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/20 rounded-lg shadow-lg">
                  <span className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <span className="text-gray-400">Hi!</span>{" "}
                    {user ? user.firstname.toUpperCase() : "User"}
                  </span>
                  <Link href="/dashboard">
                    <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Dashboard
                    </p>
                  </Link>
                  <Link href="">
                    <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Profile
                    </p>
                  </Link>
                  <button
                    onClick={onLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-primarygold hover:text-white rounded"
              >
                Courses
              </Link>
              <button
                onClick={onLogout}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          )}
          <Link href="/">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
