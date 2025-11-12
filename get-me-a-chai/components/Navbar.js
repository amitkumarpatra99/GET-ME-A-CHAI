/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaInfoCircle, FaCoffee, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[85%] bg-[#0d182f]/60 backdrop-blur-2xl border border-cyan-500/10 rounded-full px-6 py-3 z-50 shadow-lg shadow-cyan-500/10 transition-all duration-300">
      <div className="flex justify-between items-center">
        {/* ☕ Logo */}
        <Link
          href="/"
          className="font-extrabold text-lg md:text-xl text-white tracking-wide hover:text-cyan-400 transition-colors duration-200"
        >
          ☕ GET ME A <span className="text-cyan-400">CHAI</span>
        </Link>

        {/* 🌐 Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-200"
          >
            <FaHome /> Home
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-200"
          >
            <FaInfoCircle /> About
          </Link>
          <button
            onClick={() => router.push("/paymentpage")}
            className="flex items-center gap-2 text-sm font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full px-5 py-2 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            <FaCoffee /> Donate
          </button>
        </div>

        {/* 🍔 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cyan-400 hover:text-cyan-300 transition-all duration-300"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-4 bg-[#0d182f]/95 rounded-2xl border border-cyan-500/10 backdrop-blur-xl shadow-md shadow-cyan-500/20 p-5 space-y-4 animate-slideDown">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-200"
          >
            <FaHome /> Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-200"
          >
            <FaInfoCircle /> About
          </Link>

          <button
            onClick={() => {
              setMenuOpen(false);
              router.push("/paymentpage");
            }}
            className="flex items-center gap-2 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full px-5 py-2 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            <FaCoffee /> Donate
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
