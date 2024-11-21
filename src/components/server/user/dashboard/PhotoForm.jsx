"use client";
import { useState } from "react";
import { useAuth } from "@/hooks/auth/authContext";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [filePath, setFilePath] = useState("");
  const [userId, setUserId] = useState(""); // State for user ID
  const { user } = useAuth();
  const id = user?.id;
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!selectedFile || !userId) {
    //   setUploadStatus("File and User ID are required");
    //   return;
    // }

    const formData = new FormData();
    formData.append("uploadImage", selectedFile);

    try {
      const response = await fetch("/apiRoutes/imageUploader", {
        method: "PATCH",
        headers: {
          "user-id": id, // Pass userId in headers
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setUploadStatus("File uploaded and user image updated successfully!");
        setFilePath(result.user.userimage);
      } else {
        setUploadStatus(`File upload failed: ${result.error}`);
      }
    } catch (error) {
      setUploadStatus(`File upload failed: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div>
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-700"
          >
            User ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your user ID"
            required
          />
        </div> */}

        <div>
          <label
            htmlFor="uploadImage"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="uploadImage"
            name="uploadImage"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-goldlight focus:border-primarygold sm:text-sm"
          />
          <p className="mt-2 text-sm text-gray-600">
            {selectedFile ? selectedFile.name : "No file chosen"}
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-goldlight hover:bg-primarygold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-goldlight"
          >
            Upload Photo
          </button>
        </div>
      </form>

      <div className="mt-4">
        <p>{uploadStatus}</p>
        {filePath && (
          <div className="mt-4">
            <p>Updated User Image:</p>
            <img src={filePath} alt="Uploaded" className="mt-2 w-full h-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
