"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiSealCheckFill } from "react-icons/pi";

const SuccessPayment = ({ searchParams: { amount } }) => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState({});
  useEffect(() => {
    // Wait for router to be ready before accessing query
    if (router.isReady) {
      const { session_id, course_title, user_name } = router.query;
      console.log(session_id, course_title, user_name);

      setQueryParams({ session_id, course_title, user_name });
    }
  }, [router.isReady, router.query]);

  // Destructure with default values to prevent undefined error
  const { session_id = "", course_title = "", user_name = "" } = queryParams;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="relative flex justify-center items-center mb-10">
        <div className="absolute animate-ping rounded-full h-20 w-20 bg-sky-400 opacity-75"></div>
        <Image
          src="/assets/Stripe.jpg"
          alt="stripe"
          width={50}
          height={50}
          className="rounded-full z-10"
        />
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          Thank you, {user_name || "Customer"}!
        </h1>
        <h2 className="text-2xl">
          You successfully enrolled in {course_title || "the course"}.
        </h2>
        <div className="flex my-10 ">
          <div className="mx-auto h-40 w-40 rounded-full p-6 outline-dotted flex items-center justify-center ">
            <div className="absolute animate-ping rounded-full h-32 w-32 bg-sky-400 opacity-75"></div>
            <PiSealCheckFill size={200} className="z-20" />
          </div>
        </div>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${amount || "0"}.00
        </div>
        <p className="mt-4 text-lg">
          {/* Your payment session ID: 20054248 */}
          Your payment session ID: {session_id || "N/A"}
        </p>
      </div>
      <Link href="/user/courses" passHref>
        <button className="text-purple-500 bg-white rounded-md hover:bg-slate-300 p-4">
          Go to My Course{" "}
        </button>
      </Link>
    </main>
  );
};

export default SuccessPayment;
