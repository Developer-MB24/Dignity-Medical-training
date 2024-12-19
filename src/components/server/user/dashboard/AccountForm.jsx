"use client";
import { useAuth } from "@/hooks/auth/authContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

// Define Zod schema for form validation
const accountSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    currentPassword: z
      .string()
      .min(8, "Current password must be at least 8 characters long"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters long")
      .optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set path of error
  });

const AccountForm = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showcurrentPassword, setShowcurrentPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validate form data
    const validationResult = accountSchema.safeParse(formData);
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/apiRoutes/userAccount", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Account settings updated successfully!");
        toast.success("Account settings updated successfully!");
        router.push("/user/courses");
      } else {
        setError(data.error || "Failed to update account settings.");
      }
    } catch (err) {
      console.error("Error updating account settings:", err);
      setError("An error occurred while updating your account settings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white shadow-md rounded-md"
    >
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="currentPassword" className="form-label">
          Current Password
        </label>
        <input
          type={showcurrentPassword ? "text" : "password"}
          id="currentPassword"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          className="form-input"
        />
        <button
          type="button"
          onClick={() => setShowcurrentPassword(!showcurrentPassword)}
          className="flex p-2 items-center text-sm leading-5"
        >
          {showcurrentPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div>
        <label htmlFor="newPassword" className="form-label">
          New Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          className="form-input"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="flex p-2 items-center text-sm leading-5"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div>
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div>
        <button type="submit" className="btn-design-1" disabled={loading}>
          {loading ? "Saving..." : "Save Account Settings"}
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
};

export default AccountForm;
