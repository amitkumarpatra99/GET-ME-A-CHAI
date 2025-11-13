/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  FaCoffee,
  FaUsers,
  FaBolt,
  FaCode,
  FaGift,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* 🌟 HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] text-white px-6 overflow-hidden">

        {/* subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#38bdf822,transparent_70%),radial-gradient(circle_at_bottom_right,#2563eb22,transparent_70%)]"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">

          {/* Animated Neon Icon + Title */}
          <h1 className="flex items-center gap-3 font-extrabold uppercase  text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_#38bdf855]">
            Warm Cup

            <div
              className="flex items-center justify-center 
             w-28 h-28 rounded-full
             bg-white/10 backdrop-blur-xl
             border border-white/20
             shadow-lg shadow-black/30"
            >
              <FaCoffee size={55} className="text-white opacity-95" />
            </div>


          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed px-4">
            Appreciate someone’s work? Send them a warm cup ☕ to show your love and support.
            Small gestures can create big inspiration ⚡
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              onClick={() => router.push("/paymentpage")}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300"
            >
              <FaCoffee /> Give a Cup
            </button>

            <button
              onClick={() => router.push("/about")}
              className="flex items-center gap-2 border border-cyan-400/40 hover:bg-cyan-600/10 text-white font-medium px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300"
            >
              <FaBolt /> Learn More
            </button>
          </div>
        </div>

        {/* glowing orbs */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-[130px] opacity-25 animate-pulse"></div>
      </section>

      {/* ✨ DIVIDER */}
      <div className="bg-white h-[1px] opacity-10"></div>

      {/* 🚀 FEATURES SECTION */}
      <section className="text-white container mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Why Warm Cup?
        </h2>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300">
            <FaUsers className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect With Supporters</h3>
            <p className="text-gray-300 text-sm">
              Build genuine connections with your audience through meaningful appreciation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300">
            <img
              src="/coin.gif"
              alt="coins"
              width={70}
              className="mb-4 rounded-full bg-[#0a1a2f] p-2"
            />
            <h3 className="text-xl font-semibold mb-2">Instant Earnings</h3>
            <p className="text-gray-300 text-sm">
              Receive instant support from your followers with total transparency.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:shadow-blue-400/30 transition-all duration-300">
            <FaCode className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Built for Creators</h3>
            <p className="text-gray-300 text-sm">
              Perfect for developers, designers, and artists who want direct fan engagement.
            </p>
          </div>

        </div>
      </section>

      {/* ✨ DIVIDER */}
      <div className="bg-white h-[1px] opacity-10"></div>

      {/* 💎 SHOWCASE SECTION */}
      <section className="text-white container mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Join the Warm Cup Community
        </h2>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

          {/* Showcase Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300">
            <FaGift className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support & Earn</h3>
            <p className="text-gray-300 text-sm mb-4">
              Receive appreciation directly from your supporters with every warm cup.
            </p>
            <button
              onClick={() => router.push("/paymentpage")}
              className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-700 px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md shadow-cyan-400/30"
            >
              Start Now
            </button>
          </div>

          {/* Showcase Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:shadow-blue-400/30 transition-all duration-300">
            <FaHeart className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Spread Kindness</h3>
            <p className="text-gray-300 text-sm mb-4">
              Every warm cup shared spreads positivity and kindness everywhere.
            </p>
            <button
              onClick={() => router.push("/about")}
              className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md shadow-blue-400/30"
            >
              Learn More
            </button>
          </div>

          {/* Showcase Card 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300">
            <FaBolt className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Empower Creators</h3>
            <p className="text-gray-300 text-sm mb-4">
              Help creators stay motivated by fueling their creativity with your support.
            </p>
            <button
              onClick={() => router.push("/paymentpage")}
              className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md shadow-cyan-400/30"
            >
              Give a Cup
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
