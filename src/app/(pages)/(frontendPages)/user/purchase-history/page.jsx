"use client";
import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/server/user/dashboard/DashboardLayout";
import { useAuth } from "@/hooks/auth/authContext";
import axios from "axios";

const fetchEnrollmentData = async (id) => {
  try {
    const response = await axios.get(`/apiRoutes/studentenroll?user_id=${id}`);
    return response.data.user;
  } catch (error) {
    console.error("Error fetching enrollment data:", error);
    return [];
  }
};

const PurchaseHistoryPage = () => {
  const [enrollmentData, setEnrollmentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const id = user?.id;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await fetchEnrollmentData(id);
        setEnrollmentData(data);
        setFilteredData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);
  console.log(enrollmentData);

  useEffect(() => {
    const filtered = enrollmentData.filter((item) => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        item.course_title.toLowerCase().includes(searchTermLower) ||
        item.instructor_first_name.toLowerCase().includes(searchTermLower) ||
        item.location.toLowerCase().includes(searchTermLower)
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page when search term changes
  }, [searchTerm, enrollmentData]);

  // Calculate pagination details
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <DashboardLayout>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="pb-4 bg-white dark:bg-gray-900">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative p-1">
              <div className="absolute pl-2 inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Title, Location and Instructor"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sales id
                </th>
                <th scope="col" className="px-6 py-3">
                  Courses
                </th>
                <th scope="col" className="px-6 py-3">
                  Purchase date
                </th>
                <th scope="col" className="px-6 py-3">
                  Active from
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Transaction status
                </th>
                <th scope="col" className="px-6 py-3">
                  Instructor name
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.paypal_order_id}
                    </th>
                    <td className="px-6 py-4">{item.course_title}</td>
                    <td className="px-6 py-4">
                      {new Date(item.create_time).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">{item.date_time}</td>
                    <td className="px-6 py-4">{item.location}</td>
                    <td className="px-6 py-4">${item.course_price}</td>
                    <td className="px-6 py-4">{item.transaction_status}</td>
                    <td className="px-6 py-4">{item.instructor_first_name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-1 rounded-lg ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PurchaseHistoryPage;
