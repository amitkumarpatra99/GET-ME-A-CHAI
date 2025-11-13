/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCreditCard, FaCoffee } from "react-icons/fa";

const PaymentPage = () => {
  const username = "Amit Kumar Patra";
  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const handleDirectPay = () => {
    if (!paymentform.name || !paymentform.amount) {
      alert("Please enter your name and amount before paying!");
      return;
    }

    // Redirect to Razorpay page
    window.location.href = "https://pages.razorpay.com/amitpatra";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] flex flex-col items-center justify-center text-white px-6 pt-28 pb-20">

      {/* 🌟 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          ☕ Send a Warm Cup to  
          <span className="text-cyan-400"> {username}</span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Love the work? Fuel creativity with a warm cup ☕  
          Your support means more than ever ✨
        </p>
      </motion.div>

      {/* 💳 Payment Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(56,189,248,0.15)] rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-md"
      >
        <div className="flex flex-col gap-5">

          {/* 👤 Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Your Name
            </label>
            <input
              onChange={handleChange}
              value={paymentform.name}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-[#0b1a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
            />
          </div>

          {/* 💬 Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Message (optional)
            </label>
            <textarea
              onChange={handleChange}
              value={paymentform.message}
              name="message"
              placeholder="Write a message..."
              className="w-full px-4 py-3 rounded-lg bg-[#0b1a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none transition-all duration-200"
              rows="3"
            />
          </div>

          {/* 💰 Amount */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Amount (₹)
            </label>
            <input
              onChange={handleChange}
              value={paymentform.amount}
              type="number"
              name="amount"
              placeholder="Enter amount"
              className="w-full px-4 py-3 rounded-lg bg-[#0b1a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
            />
          </div>

          {/* 🔘 Pay Now Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDirectPay}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition-all font-semibold text-lg py-3 rounded-xl shadow-lg shadow-cyan-400/30"
          >
            <FaCreditCard size={18} className="text-white" />
            Send Warm Cup 
          </motion.button>

          {/* ⚡ Quick Amount Buttons */}
          <div className="flex justify-center flex-wrap gap-3 mt-4">
            {[99, 199, 299, 499].map((amt) => (
              <motion.button
                key={amt}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  setPaymentform({ ...paymentform, amount: amt });
                  handleDirectPay();
                }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-blue-700 hover:to-cyan-600 text-white font-medium transition-all shadow-md shadow-cyan-400/30"
              >
                ₹{amt}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Glowing blur elements */}
      <div className="absolute top-20 right-24 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-25 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500 rounded-full blur-[130px] opacity-25 animate-pulse"></div>
    </div>
  );
};

export default PaymentPage;
