"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { useAuth } from "@/hooks/auth/authContext";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const initialOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  currency: "USD",
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const fetchCourses = async (courseIds) => {
  try {
    const response = await fetch(`/apiRoutes/courses?id=${courseIds}`);
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    return { error: "Error fetching courses" };
  }
};

const validationSchema = Yup.object({
  date_time: Yup.string().required("Date & Time is required"),
  location: Yup.string().required("Location is required"),
  phoneNumber: Yup.string()
    .matches(/^\+?1?\d{10}$/, "Valid phone number is required")
    .required("Phone number is required"),
  address: Yup.string(),
  additionalInfo: Yup.string(),
});

const BulkPayment = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [scheduleData, setScheduleData] = useState([]);
  const [showPayPal, setShowPayPal] = useState(false);
  const [submitVisible, setSubmitVisible] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const courseIds = searchParams.get("courseIds");
  const totalAmount = searchParams.get("totalAmount");
  const { id } = useParams();
  console.log(courseIds, totalAmount);

  useEffect(() => {
    if (!user) router.push("/signin");
    const fetchData = async () => {
      if (courseIds) {
        setLoading(true);
        const data = await fetchCourses(courseIds);
        if (!data.error) {
          setCoursesData(data.courses);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [courseIds, router, user]);
  console.log(coursesData);

  useEffect(() => {
    const fetchSchedule = async () => {
      if (params.id) {
        const data = await getScheduleCourse(params.id);
        if (!data.error) {
          if (data.schedules.length === 0) {
            toast.error(
              "This course is not scheduled yet. Please contact Admin or Instructor."
            );
            setErrorMessage(
              "This course is not scheduled yet. Please contact Admin or Instructor."
            );
          } else {
            setScheduleData(data.schedules);
          }
        } else {
          toast.error("Error fetching schedule data.");
        }
      }
    };
    fetchSchedule();
  }, [params.id]);

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setShowPayPal(true);
    setSubmitVisible(false);
    const enrollmentData = {
      user_id: user?.id,
      course_ids: courseIds.split(","),
      firstName: user?.firstname,
      lastName: user?.lastname,
      email: user?.email,
      phoneNumber: values.phoneNumber,
      address: values.address,
      additionalInfo: values.additionalInfo,
      date_time: values.date_time,
      location: values.location,
      totalAmount: parseFloat(totalAmount),
    };
    sessionStorage.setItem("enrollmentData", JSON.stringify(enrollmentData));
    setSubmitting(false);
  };

  const onApprove = async (data) => {
    try {
      const response = await fetch("/apiRoutes/paypalcaptureorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: data.orderID,
          enrollmentData: JSON.parse(sessionStorage.getItem("enrollmentData")),
        }),
      });

      const capture = await response.json();
      if (!response.ok)
        throw new Error(capture.error || "Error capturing order");

      toast.success("Payment successful!");
      sessionStorage.setItem("orderID", data.orderID);
      router.push("/success");
    } catch (error) {
      console.error("Capture Order Error:", error);
      toast.error("Failed to capture PayPal payment.");
    }
  };

  const handleCheckout = async () => {
    try {
      const enrollmentData = JSON.parse(
        sessionStorage.getItem("enrollmentData")
      );
      const response = await axios.post("/apiRoutes/stripecheckout", {
        amount: enrollmentData.totalAmount * 100, // Stripe expects amount in cents
        currency: "usd",
        enrollmentData: enrollmentData, // Include necessary metadata
      });

      const { sessionId } = response.data;
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session", error);
      toast.error("Failed to initiate Stripe checkout.");
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 max-w-8xl mx-auto">
        <div className="w-full md:w-1/5 p-4">
          <Link href="/">Home</Link>
        </div>
        {/* Left Section - Enrollment Details */}
        <div className="w-full md:w-3/5 p-4">
          <div className="border-b pb-4 mb-6">
            <h1 className="text-2xl font-semibold mb-6">Enroll in Courses</h1>
            {loading ? (
              <p>Loading courses...</p>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-4">Selected Courses</h2>
                  {coursesData.map((course, index) => (
                    <div key={index} className="p-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-gray-600">{course.description}</p>
                      <p className="text-gray-800 font-bold">
                        ${course.price.toFixed(2)}
                      </p>
                      <div className="mt-4">
                        <label
                          htmlFor={`slot_${index}`}
                          className="block text-sm font-semibold mb-2"
                        >
                          Select Slot
                        </label>
                        <Field
                          as="select"
                          id={`slot_${index}`}
                          name={`slot_${index}`}
                          className="w-full p-2 border border-gray-300 rounded"
                        >
                          <option value="">Select a slot...</option>
                          {scheduleData.map((schedule) => {
                            const formattedDate = new Date(
                              schedule.date
                            ).toLocaleDateString();
                            const timeRange = `${schedule.time_from} - ${schedule.time_to}`;
                            return (
                              <option
                                key={schedule.id}
                                value={`${formattedDate} ${timeRange}`}
                              >
                                {formattedDate} / {timeRange}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                    </div>
                  ))}
                </div>
                <Formik
                  initialValues={{
                    date_time: "",
                    location: "",
                    phoneNumber: "",
                    address: "",
                    additionalInfo: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div>
                        <label
                          htmlFor="date_time"
                          className="block text-sm font-semibold mb-2"
                        >
                          Date & Time
                        </label>
                        <Field
                          type="datetime-local"
                          id="date_time"
                          name="date_time"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <ErrorMessage
                          name="date_time"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-semibold mb-2"
                        >
                          Location
                        </label>
                        <Field
                          type="text"
                          id="location"
                          name="location"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <ErrorMessage
                          name="location"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-semibold mb-2"
                        >
                          Phone Number
                        </label>
                        <Field
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-semibold mb-2"
                        >
                          Address
                        </label>
                        <Field
                          type="text"
                          id="address"
                          name="address"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="additionalInfo"
                          className="block text-sm font-semibold mb-2"
                        >
                          Additional Information
                        </label>
                        <Field
                          type="text"
                          id="additionalInfo"
                          name="additionalInfo"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <ErrorMessage
                          name="additionalInfo"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        className={`${
                          isSubmitting
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        } text-white px-4 py-2 rounded shadow`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Enroll"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </>
            )}
          </div>
        </div>

        {/* Right Section - Payment */}
        <div className="w-full md:w-1/5 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-bold mb-4">Payment Summary</h2>
          <p>Total Amount: ${parseFloat(totalAmount).toFixed(2)}</p>

          {showPayPal && (
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: parseFloat(totalAmount).toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return onApprove(data);
                }}
              />
            </PayPalScriptProvider>
          )}

          {submitVisible && (
            <>
              <div className="mt-6">
                <button
                  onClick={handleCheckout}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
                >
                  Pay with Stripe
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BulkPayment;
