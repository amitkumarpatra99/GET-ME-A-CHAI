"use client";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    cover: "",
    razorpayid: "",
    razorpaysecret: "",
  });

  // 🔹 Redirect to login if user is not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // 🔹 Auto-fill email and name from session if available
  useEffect(() => {
    if (session?.user) {
      setForm((prev) => ({
        ...prev,
        name: session.user.name || "",
        email: session.user.email || "",
      }));
    }
  }, [session]);

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    // Example API call (uncomment when backend ready)
    /*
    const res = await fetch("/api/save-dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) alert("Details saved successfully!");
    else alert(data.error || "Something went wrong!");
    */
  };

  // 🔹 Loading State
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600 dark:text-gray-300">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 text-white">
      <h1 className="text-center my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Welcome to Your Dashboard
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700"
      >
        {/* Name */}
        <div className="my-3">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Name
          </label>
          <input
            value={form.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="my-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            value={form.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Username */}
        <div className="my-3">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Username
          </label>
          <input
            value={form.username}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your custom username"
          />
        </div>

        {/* Cover Picture */}
        <div className="my-3">
          <label
            htmlFor="cover"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Cover Picture URL
          </label>
          <input
            value={form.cover}
            onChange={handleChange}
            type="text"
            name="cover"
            id="cover"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="https://example.com/cover.jpg"
          />
        </div>

        {/* Razorpay ID */}
        <div className="my-3">
          <label
            htmlFor="razorpayid"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Razorpay ID
          </label>
          <input
            value={form.razorpayid}
            onChange={handleChange}
            type="text"
            name="razorpayid"
            id="razorpayid"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your Razorpay ID"
          />
        </div>

        {/* Razorpay Secret */}
        <div className="my-3">
          <label
            htmlFor="razorpaysecret"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Razorpay Secret
          </label>
          <input
            value={form.razorpaysecret}
            onChange={handleChange}
            type="text"
            name="razorpaysecret"
            id="razorpaysecret"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your Razorpay Secret"
          />
        </div>

        {/* Submit Button */}
        <div className="py-4 text-center">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-6 py-2.5 transition-all duration-200"
          >
            Save Details
          </button>
        </div>
      </form>

      {/* Optional: Sign out */}
      <div className="text-center mt-6">
        <button
          onClick={() => signOut()}
          className="text-sm text-gray-400 hover:text-white underline"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
