"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "@/components/client/common/Authlayout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import Link from "next/link";
import Logo from "@/components/client/common/Logo";

// Define the validation schema
const resetPasswordSchema = z
  .object({
    // email: z
    //   .string()
    //   .email("Invalid email address")
    //   .nonempty("Email is required"),
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
    confirmPassword: z
      .string()
      .min(6, "Please confirm your password")
      .nonempty("Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  useEffect(() => {
    // Extract email from query parameters
    const emailParam = new URLSearchParams(window.location.search).get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleResetPassword = async (data) => {
    const emailParam = new URLSearchParams(window.location.search).get("email");

    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/apiRoutes/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: new URLSearchParams(window.location.search).get("token"),
          email:emailParam,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Password updated successfully");
        router.push("/signin");
      } else {
        setError(result.error || "Failed to reset password. Please try again.");
      }
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <section>
      <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Reset Password
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(handleResetPassword)}
          >
            <div>
              <input
                type="email"
                id="email"
                defaultValue={email}
                disabled
                {...register("email")}
                className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                {...register("newPassword")}
                className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                  errors.newPassword ? "border-red-500" : ""
                }`}
                placeholder="New Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 flex items-center text-sm leading-5"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              {errors.newPassword && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
                className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn-design-1 w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="flex justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <p>Processing...</p>
                </span>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </section>
    </AuthLayout>
  );
};

export default ResetPassword;
