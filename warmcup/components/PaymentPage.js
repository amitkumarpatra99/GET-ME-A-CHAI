```jsx
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Coffee,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const PaymentPage = () => {
  const username = "Amit Kumar Patra";

  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickAmounts = [99, 199, 299, 499];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPaymentform((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleDirectPay = () => {
    const trimmedName = paymentform.name.trim();
    const amount = Number(paymentform.amount);

    if (!trimmedName) {
      setError("Please enter your name.");
      return;
    }

    if (!paymentform.amount || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    if (amount < 1) {
      setError("Minimum payment amount is ₹1.");
      return;
    }

    setError("");
    setIsLoading(true);

    // Razorpay Payment Page
    window.location.href = "https://pages.razorpay.com/amitpatra";
  };

  const handleQuickAmount = (amount) => {
    setPaymentform((prev) => ({
      ...prev,
      amount: String(amount),
    }));

    setError("");
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#050b16] via-[#0b1628] to-[#050a12] px-5 pb-16 pt-28 text-white sm:px-6">
      {/* =========================
          BACKGROUND GLOW
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[130px]" />

        <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center">
        {/* =========================
            HERO SECTION
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center"
        >
          {/* Coffee Icon */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-lg shadow-cyan-500/10"
          >
            <Coffee className="h-8 w-8 text-cyan-400" />
          </motion.div>

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300">
            <Sparkles size={14} />
            Support My Work
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Send a Warm Cup to{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {username}
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            Enjoying my work? Your support helps me keep building, learning,
            and creating better things. Every cup makes a difference.
          </p>
        </motion.div>

        {/* =========================
            PAYMENT CARD
        ========================== */}
        <motion.section
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="w-full rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-500/5 backdrop-blur-2xl sm:p-8"
        >
          {/* Card Header */}
          <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <h2 className="text-lg font-semibold">
                Make a Contribution
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Choose an amount or enter your own
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
              <CreditCard
                className="text-cyan-400"
                size={21}
              />
            </div>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* =========================
                NAME
            ========================== */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                onChange={handleChange}
                value={paymentform.name}
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-[#081322] px-4 py-3.5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            {/* =========================
                MESSAGE
            ========================== */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <span className="text-xs text-gray-600">
                  Optional
                </span>
              </div>

              <textarea
                id="message"
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                placeholder="Write a kind message..."
                maxLength={250}
                rows={3}
                className="w-full resize-none rounded-xl border border-white/10 bg-[#081322] px-4 py-3.5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
              />

              <div className="mt-1 text-right text-xs text-gray-600">
                {paymentform.message.length}/250
              </div>
            </div>

            {/* =========================
                AMOUNT
            ========================== */}
            <div>
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Amount
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  ₹
                </span>

                <input
                  id="amount"
                  onChange={handleChange}
                  value={paymentform.amount}
                  type="number"
                  name="amount"
                  min="1"
                  step="1"
                  placeholder="Enter amount"
                  inputMode="numeric"
                  className="w-full rounded-xl border border-white/10 bg-[#081322] py-3.5 pl-9 pr-4 text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>
            </div>

            {/* =========================
                ERROR MESSAGE
            ========================== */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300"
              >
                {error}
              </motion.div>
            )}

            {/* =========================
                QUICK AMOUNTS
            ========================== */}
            <div>
              <p className="mb-3 text-sm font-medium text-gray-400">
                Quick select
              </p>

              <div className="grid grid-cols-4 gap-2.5">
                {quickAmounts.map((amt) => {
                  const isSelected =
                    Number(paymentform.amount) === amt;

                  return (
                    <motion.button
                      key={amt}
                      type="button"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleQuickAmount(amt)}
                      className={`rounded-xl border py-2.5 text-sm font-semibold transition-all ${
                        isSelected
                          ? "border-cyan-400/60 bg-cyan-400/15 text-cyan-300 shadow-lg shadow-cyan-500/10"
                          : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                      }`}
                    >
                      ₹{amt}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* =========================
                PAY BUTTON
            ========================== */}
            <motion.button
              type="button"
              whileHover={!isLoading ? { scale: 1.015 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
              onClick={handleDirectPay}
              disabled={isLoading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-base font-bold shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                  Redirecting...
                </>
              ) : (
                <>
                  <CreditCard size={19} />

                  Continue to Payment

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </motion.button>
          </div>

          {/* =========================
              SECURITY
          ========================== */}
          <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-5 text-xs text-gray-500">
            <ShieldCheck
              size={15}
              className="text-cyan-400"
            />

            Secure payment powered by Razorpay
          </div>
        </motion.section>

        {/* =========================
            TRUST FEATURES
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-7 grid w-full grid-cols-3 gap-3 text-center"
        >
          {/* Secure */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4">
            <CheckCircle2
              className="mx-auto mb-2 text-cyan-400"
              size={18}
            />

            <p className="text-xs text-gray-500">
              Secure
            </p>
          </div>

          {/* Support */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4">
            <Coffee
              className="mx-auto mb-2 text-cyan-400"
              size={18}
            />

            <p className="text-xs text-gray-500">
              Support
            </p>
          </div>

          {/* Thank You */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] px-3 py-4">
            <Sparkles
              className="mx-auto mb-2 text-cyan-400"
              size={18}
            />

            <p className="text-xs text-gray-500">
              Thank You
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-600">
          Thank you for supporting independent creators.
        </p>
      </div>
    </main>
  );
};

export default PaymentPage;
```
