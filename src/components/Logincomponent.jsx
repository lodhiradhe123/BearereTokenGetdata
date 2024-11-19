import React, { useState } from "react";
import axios from "axios";

const Logincomponent = () => {
  const [formData, setFormData] = useState({
    action: "create",
    username: "",
    url: "http://service1.nuke.co.in/api/webhook",
    value: 1,
    sender_id: "",
  });

  const [responseMessage, setResponseMessage] = useState();
  const [loading, setLoading] = useState(false);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDIxMzQ0M2I4NjBiNTRlZWRlMjhjY2VlMGZmZWVkYWRiZWMzNmRjN2E5OThlZWIyZDExYTlkNDZmZWE0NTFlNzVlN2ZlYjZmZDYxNzg1OGEiLCJpYXQiOjE3MzE0ODc5MTAuODU4MjQ0LCJuYmYiOjE3MzE0ODc5MTAuODU4MjUxLCJleHAiOjE3NjMwMjM5MTAuODQ5OTM1LCJzdWIiOiI2OSIsInNjb3BlcyI6W119.g78aoi0_Kr-7MDl0Bu6eNVmUh2MJsOPwCn5NrEwvSuINeUH9rKCjIPDk7GP-du6ivym-WfjCg2RJmCu_YuIPzkRcRZJTvHe9da6zIeE8DZKqFzxZ1HCHe4P68NlWmRkiVfe8Rwvaxz8sgl4QK9VfAnS9cH8qNjth0r87lH7DtR9b1QvY_QpcgllR0HyMDjBaH7KUJzL10oTiOhMpYIJzUj_qqKhNs9P13FUMLsCgu193tU89Ir2ti3QPm4AA-GJX9SP5yAHRdhCw_5SnaX9BxWP2NDLejts_klQDFb1LZ8tWFKfh8wIllUrPeexQGj0ewPeBLyn64PK4DfSnpGXVxQnWypctvbH4ouWVHMt2vY0V6j5QWIjIe_KCR3229CwEfnC3ULRZVClYRHszfs_B5Jl4nmhO-5lgZ9LRbiMERk5pn7i8Y9DOjToirtCJJPef4l11fdGBk_fru1LKCs1i2h16wehQW1GbwZWSo3SKLkq9elmw6lyJLyrAX3mJgVjs4jv9YpAfk0eShKUIqE3i8TlIvLwZIOrradpSBDbqBD9YUzMadPqwfMU_2afYCbMtS24jNqdWZf6A102LOAbL4N8zINQfoNmsQScje2_NzCtybTveuhZDmHe6FVDVBgGtMjsXbAxMKvbItxrlwYdHVKDRkwD0ERWbiWoK3p7qQU0";

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
    setResponseMessage("");

    try {
      const response = await axios.post(
        formData.url,
        {
          action: formData.action,
          username: formData.username,
          url: formData.url,
          value: formData.value,
          sender_id: formData.sender_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage(response.data.data);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred";
      setResponseMessage(`Failed: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };
  console.log(responseMessage);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          User Input Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Action
            </label>
            <input
              type="text"
              name="action"
              value={formData.action}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 border-b-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full rounded-sm  shadow-sm focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              URL
            </label>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sender ID
            </label>
            <input
              type="text"
              name="sender_id"
              value={formData.sender_id}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
       
        {responseMessage && (
          <div>
            <h1>{responseMessage.username }</h1>
            <div
                    key={responseMessage.id}
                    className="p-4 bg-gray-100 border rounded-md shadow-sm"
                  >
                    <p className="text-sm text-gray-800">
                      <strong>ID:</strong> {responseMessage.id}
                    </p>
                    
                    <p className="text-sm text-gray-800">
                      <strong>Username:</strong> {responseMessage.username}
                    </p>
                    <p className="text-sm text-gray-800">
                      <strong>Status:</strong>{" "}
                      {responseMessage.status}
                    </p>
                    <p className="text-sm text-gray-800">
                      <strong>Url:</strong>{" "}
                      {responseMessage.url }
                    </p>
                    <p className="text-sm text-gray-800">
                      <strong>value:</strong>{" "}
                      {responseMessage.value }
                    </p>
                    <p className="text-sm text-gray-800">
                      <strong> sender_id:</strong>{" "}
                      {responseMessage. sender_id }
                    </p>
                   
                   
                  </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logincomponent;
