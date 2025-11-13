"use client";
import React from "react";
import { FaUsers, FaHeart, FaCode, FaBolt } from "react-icons/fa";
import Link from "next/link";
import { Coffee } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] relative overflow-hidden">

      {/* ✨ Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#38bdf833,transparent_70%),radial-gradient(circle_at_bottom_right,#2563eb33,transparent_70%)]"></div>

      {/* 🌟 Hero Section */}
      <section className="relative w-full text-center pt-32 px-6 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          About Warm Cup
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          <span className="text-cyan-400 font-semibold">Warm Cup</span> is a heartfelt platform helping creators, developers, and artists receive support from people who appreciate their work.
          Every warm cup you send fuels passion, motivation, and creativity ☕💙
        </p>
      </section>

      {/* 💻 Creator Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-24 gap-10 z-10">

        {/* Profile Image */}
        <div className="relative">
          <Image
            src="/DP.jpg"
            alt="Amit Kumar Patra"
            width={256}
            height={256}
            className="rounded-full w-64 h-64 object-cover border-4 border-cyan-400 shadow-[0_0_30px_#38bdf855]"
          />
          <div className="absolute -bottom-2 -right-2 bg-cyan-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
            Creator
          </div>
        </div>


        {/* Info */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Amit Kumar Patra
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            A passionate full-stack developer from Bhubaneswar, Odisha —
            dedicated to building meaningful digital experiences. Through
            <span className="text-cyan-400 font-semibold"> Warm Cup</span>, Amit makes it effortless for supporters to contribute and empower his creative journey.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">

            {/* ⭐ Explore Projects → GitHub Link */}
            <Link
              href="https://github.com/amitkumarpatra99"
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r 
               from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 
               transition-all duration-300 text-white font-semibold text-sm 
               shadow-md shadow-blue-600/30"
            >
              <FaBolt /> Explore Projects
            </Link>

            {/* ⭐ Contact Me → GitHub / Portfolio / Any Link */}
            <Link
              href="https://mrpatra.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-400 
               text-cyan-400 hover:bg-cyan-600/20 transition-all duration-300 
               text-sm font-semibold"
            >
              <FaCode /> MR PATRA WEB
            </Link>

          </div>

        </div>
      </section>

      {/* 🚀 Features Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-3 z-10">

        {/* Card 1 */}
        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300">
          <Coffee className="text-4xl mx-auto text-cyan-400 mb-4" />
          <h3 className="font-semibold text-xl mb-2 text-white">Send a Warm Cup</h3>
          <p className="text-gray-400 text-sm">
            Support creators instantly with a warm cup — a simple gesture with a powerful impact.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300">
          <FaUsers className="text-4xl mx-auto text-blue-400 mb-4" />
          <h3 className="font-semibold text-xl mb-2 text-white">Connect with Supporters</h3>
          <p className="text-gray-400 text-sm">
            Build deep and real relationships with the people who care about your work.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:scale-105 hover:shadow-cyan-400/30 transition-all duration-300">
          <FaHeart className="text-4xl mx-auto text-pink-400 mb-4" />
          <h3 className="font-semibold text-xl mb-2 text-white">Spread Kindness</h3>
          <p className="text-gray-400 text-sm">
            Every warm cup is a sign of gratitude — inspiring creators to keep moving forward.
          </p>
        </div>

      </section>

      {/* 🌌 Bottom Gradient Glow */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
    </div>
  );
}
