/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  ArrowUp,
  Twitter,
  FileText,
  Shield,
  RotateCcw,
  User2Icon,
} from "lucide-react";
import { SiRazorpay } from "react-icons/si";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";

const Footer = () => {
  const icons = [
      {
      id: 0,
      icon: <User2Icon size={18} />,
      link: "https://mrpatra.vercel.app/",
    },
    {
      id: 1,
      icon: <Github size={18} />,
      link: "https://github.com/amitkumarpatra99",
    },
    {
      id: 2,
      icon: <LiaLinkedinIn size={18} />,
      link: "https://www.linkedin.com/in/amitkumarpatra99",
    },
    {
      id: 3,
      icon: <Instagram size={18} />,
      link: "https://www.instagram.com/mr_patraa_",
    },
    {
      id: 4,
      icon: <Twitter size={18} />,
      link: "https://x.com/mr_patra_",
    },
  
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Donate", href: "/paymentpage" },
  ];

  const legalLinks = [
    {
      name: "Terms & Conditions",
      href: "/legal/terms",
      icon: <FileText size={16} />,
    },
    {
      name: "Privacy Policy",
      href: "/legal/privacy",
      icon: <Shield size={16} />,
    },
    {
      name: "Refunds & Cancellations",
      href: "/legal/refunds",
      icon: <RotateCcw size={16} />,
    },
  ];

  return (
    <footer className="relative text-gray-300 py-16 px-6 border-t border-cyan-700/20 bg-gradient-to-b from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] overflow-hidden">

      {/* ✨ Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e922,transparent_70%),radial-gradient(circle_at_bottom_right,#2563eb22,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-12 z-10">

        {/* 1️⃣ Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4 select-none">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 shadow-lg">
              <FaCoffee size={22} className="text-cyan-400" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              WARM <span className="text-cyan-400">CUP</span>
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Support creators, developers, and dreamers — one warm cup at a time ☕  
            Helping creativity stay inspired and connected.
          </p>

          {/* 🌐 Social Icons */}
          <div className="flex space-x-4 mt-5">
            {icons.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a2235] text-cyan-400 transition-all duration-300 group-hover:text-white group-hover:bg-cyan-700/30">
                  {item.icon}
                </div>

                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #38bdf8, #2563eb, #38bdf8)",
                  }}
                ></div>
              </a>
            ))}
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div className="lg:ml-10">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="w-20 h-[3px] rounded-full mb-4 mt-2 lg:ml-1 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#38bdf8]"></div>

          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Legal Section (NEW) */}
        <div>
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <div className="w-[65px] h-[3px] rounded-full mb-4 mt-2 lg:ml-1 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#38bdf8]"></div>

          <ul className="space-y-3 text-sm">
            {legalLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-cyan-400">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <div className="w-[65px] h-[3px] rounded-full mb-4 mt-2 lg:ml-1 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#38bdf8]"></div>

          <ul className="space-y-4 text-sm">

            <li className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a2235] group-hover:bg-cyan-700/30 transition-all">
                <Mail size={16} className="text-cyan-400 group-hover:text-white" />
              </div>
              <a href="mailto:mrpatra.web@gmail.com" className="group-hover:text-white text-gray-400">
                mrpatra.web@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a2235] group-hover:bg-cyan-700/30 transition-all">
                <Phone size={16} className="text-cyan-400 group-hover:text-white" />
              </div>
              <a href="tel:+918144129955" className="group-hover:text-white text-gray-400">
                +91 8144129955
              </a>
            </li>

            <li className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a2235] group-hover:bg-cyan-700/30 transition-all">
                <FaWhatsapp size={16} className="text-cyan-400 group-hover:text-white" />
              </div>
              <a href="https://wa.me/8144129955" className="group-hover:text-white text-gray-400">
                WhatsApp
              </a>
            </li>

            <li className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a2235] group-hover:bg-cyan-700/30 transition-all">
                <MapPin size={16} className="text-cyan-400 group-hover:text-white" />
              </div>
              <span className="group-hover:text-white text-gray-400">
                Bhubaneswar, Odisha
              </span>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-cyan-700/20 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Warm Cup — All Rights Reserved</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 mt-3 md:mt-0 text-cyan-400 hover:text-white transition-all"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a2235] group-hover:bg-cyan-700/30 transition-all">
            <ArrowUp size={16} />
          </div>
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
