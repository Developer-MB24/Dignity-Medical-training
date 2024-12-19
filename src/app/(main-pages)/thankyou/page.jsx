// pages/thank-you.js
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import React from "react";

const ThankYou = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-goldlight">
            Thank you! Your message has been sent successfully.
          </h1>
          <h2 className="text-xl font-semibold text-goldlight mt-4">
            We will get back to you shortly.
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
