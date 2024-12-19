// Checkout.js
"use client";
import { useRouter } from "next/navigation";
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import { useCart } from "@/hooks/cart/cartContext";
import Image from "next/image";

const Checkout = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart(); // Get cart state and functions
  const router = useRouter();

  const handleCheckout = () => {
    const courseIds = cartItems.map((item) => item.id).join(","); // Get course IDs
    const totalAmount = totalPrice; // Get total amount
    router.push(
      `/bulkpayment?courseIds=${courseIds}&totalAmount=${totalAmount}`
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        {/* Left side: Cart Items */}
        <div className="w-full md:w-3/5 bg-white p-4 shadow rounded">
          <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
          <p className="text-gray-600 mb-4">
            {cartItems.length} {cartItems.length === 1 ? "course" : "courses"}{" "}
            in cart
          </p>

          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border-b border-gray-200 flex space-x-4"
                >
                  <Image
                    src="/images/pages/first_aid.jpg"
                    alt={item.course_title}
                    width={100}
                    height={100}
                    className="rounded object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">
                      {item.course_title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.short_description}
                    </p>
                    <p className="text-gray-800 font-bold">
                      ${parseFloat(item.course_price).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)} // Remove from cart
                    className="text-red-500 hover:text-red-700 flex-shrink-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No items in cart.</p>
          )}
        </div>

        {/* Right side: Total Price and Checkout Button */}
        <div className="w-full md:w-2/5 bg-gray-50 p-4 shadow rounded">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-lg">Total Price:</p>
              <p className="text-lg font-bold">${totalPrice}</p>
            </div>

            <button
              onClick={handleCheckout}
              className="bg-goldlight hover:bg-primarygold text-white px-4 py-2 rounded w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
