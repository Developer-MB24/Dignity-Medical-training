"use client";
import React, { useState, useEffect } from "react";
import ProgressTabs from "@/components/client/common/ProgressTabs";
import AdminDashboardLayout from "@/components/server/admin/dashboard/AdminDashboardLayout";
import Editor from "@/components/client/common/Editor";
import { useRouter, useParams } from "next/navigation";
import { updateStudent } from "../../../../../../utils/api";
import { toast } from "sonner";

// import { useAuth } from "@/hooks/auth/authContext";

const getUser = async (id) => {
  try {
    console.log(id);
    const response = await fetch(`/apiRoutes/manage-student?id=${id}`); // Send id as query parameter
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching course:", error);
    return { error: "Error fetching course" };
  }
};

const AddNewStudent = ({ params }) => {
  const tabs = [
    "Basic info",
    "Login Credentials",
    "Social Information",
    "Finish",
  ];
  //   const { user } = useAuth();
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    biography: "",
    userimage: null,
    email: "",
    password: "",
    facebook: "",
    linkedin: "",
    twitter: "",
  });

  console.log(id);
  console.log(studentData);
  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        setLoading(true);
        const data = await getUser(params.id);
        if (!data.error) {
          console.log(data);
          setStudentData(data.users);

          //   console.log(data.courses[0]?.description);
          setFormData({
            id: params.id,
            firstname: data.users[0]?.firstname || "",
            lastname: data.users[0]?.lastname || "",
            biography: data.users[0]?.biography || "",
            userimage: data.users[0]?.userimage || null,
            email: data.users[0]?.email || "",
            password: data.users[0]?.password || "",
            facebook: data.users[0]?.facebook || "",
            linkedin: data.users[0]?.linkedIn || "",
            twitter: data.users[0]?.twitter || "",
          });
        }

        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      userimage: e.target.files[0],
    }));
  };

  const handleEditorChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      biography: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const studentId = id;
      console.log(studentId);
      console.log(formData);
      const response = await updateStudent(studentId, formData);
      toast.success("Student updated successfully")
      console.log("Student Updated successfully:", response);

      // Reset formData state
      setFormData({
        firstname: "",
        lastname: "",
        biography: "",
        userimage: null,
        email: "",
        password: "",
        facebook: "",
        linkedin: "",
        twitter: "",
      });
      setLoading(false);
      router.push("/admin/manage-student");
      // Optionally, you can redirect or show a success message
    } catch (error) {
      toast.error("Error updating student")
      console.error("Error updating student:", error);
      setLoading(false);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <AdminDashboardLayout>
        <div className="bg-white shadow-md rounded-md ">
          <ProgressTabs tabs={tabs}>
            <div>
              <div>
                <div className="container mx-auto p-4">
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="firstname"
                      >
                        First name <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="md:w-1/2">
                      <input
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="firstname"
                        placeholder="Enter the first name"
                        type="text"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="lastname"
                      >
                        Last name <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="md:w-1/2">
                      <input
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="lastname"
                        placeholder="Enter the last name"
                        type="text"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="biography"
                      >
                        Biography
                      </label>
                    </div>
                    <div className="md:w-1/2 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                      <Editor
                        value={formData.biography}
                        onChange={handleEditorChange}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="userimage"
                      >
                        User Image <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex items-center space-x-2">
                        <input
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="userimage"
                          type="file"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="container mx-auto p-4">
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="email"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="md:w-1/2">
                      <input
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="email"
                        placeholder="Enter the email"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="password"
                      >
                        Password <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="md:w-1/2">
                      <input
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="password"
                        placeholder="Enter password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="facebook"
                    >
                      Facebook
                    </label>
                  </div>
                  <div className="md:w-1/2">
                    <input
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="facebook"
                      placeholder="Enter Facebook"
                      type="text"
                      value={formData.facebook}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="linkedIn"
                    >
                      LinkedIn
                    </label>
                  </div>
                  <div className="md:w-1/2">
                    <input
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="linkedin"
                      placeholder="Enter Linkedin"
                      type="text"
                      value={formData.linkedin}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="twitter"
                    >
                      Twitter
                    </label>
                  </div>
                  <div className="md:w-1/2">
                    <input
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="twitter"
                      placeholder="Enter Twitter"
                      type="text"
                      value={formData.twitter}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="flex items-center justify-center mb-4">
                  <h1 className="text-sm">You are just one click away</h1>
                </div>
                <div className="flex items-center justify-center ">
                  <button
                    className={`btn-design-1 ${
                      loading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    onClick={handleSubmit}
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
                        <p>Updating...</p>
                      </span>
                    ) : (
                      "Update Student"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </ProgressTabs>
        </div>
      </AdminDashboardLayout>
    </div>
  );
};

export default AddNewStudent;