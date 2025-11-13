/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaInfoCircle, FaCoffee } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // sticky hide/show on scroll
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 80) setHidden(true);
      else setHidden(false);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (route) => pathname === route;

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed inset-x-4 md:inset-x-12 top-4 z-50 pointer-events-auto"
    >
      <nav
        aria-label="Primary"
        className="mx-auto w-full max-w-6xl backdrop-blur-md bg-gradient-to-r from-slate-900/60 via-black/40 to-slate-900/40 border border-cyan-500/10 rounded-full px-4 md:px-6 py-3 shadow-lg shadow-cyan-800/20 transition-all"
      >
        <div className="flex items-center justify-between gap-4">
          {/* brand */}
          <Link href="/" className="flex items-center gap-3 select-none" aria-label="Get Me A Chai - Home">
            <motion.div whileHover={{ scale: 1.05 }} className="leading-tight">
              <div className="text-white font-extrabold text-sm md:text-base tracking-wide">
                ☕ GET ME A <span className="text-cyan-400">CHAI</span>
              </div>
              <div className="text-xs text-gray-300 hidden md:block">A small sip of happiness</div>
            </motion.div>
          </Link>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/") ? "text-cyan-400" : "text-gray-200 hover:text-white"
              }`}
            >
              <motion.div whileHover={{ rotate: 10 }}><FaHome /></motion.div> Home
            </Link>

            <Link
              href="/about"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/about") ? "text-cyan-400" : "text-gray-200 hover:text-white"
              }`}
            >
              <motion.div whileHover={{ rotate: 10 }}><FaInfoCircle /></motion.div> About
            </Link>

            <button
              onClick={() => router.push("/paymentpage")}
              className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-cyan-500/70 to-blue-500/60 text-white px-4 py-2 rounded-full shadow-md hover:scale-[1.02] transition"
            >
              <motion.div whileHover={{ rotate: 10 }}><FaCoffee /></motion.div> Donate
            </button>
          </div>

          {/* mobile actions */}
          <div className="md:hidden flex items-center gap-3">
            <button
              aria-label="Donate"
              onClick={() => router.push("/paymentpage")}
              className="p-2 rounded-md bg-cyan-600/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-600/15 transition"
            >
              <motion.div whileHover={{ rotate: 15 }}><FaCoffee /></motion.div>
            </button>

            {/* hamburger */}
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/4 backdrop-blur-sm border border-white/6 hover:scale-105 transition-transform"
            >
              <span className="sr-only">Toggle menu</span>

              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M4 7H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" animate={open ? { rotate: 45, translateY: 6 } : { rotate: 0 }} />
                <motion.path d="M4 12H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" animate={open ? { opacity: 0 } : { opacity: 1 }} />
                <motion.path d="M4 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" animate={open ? { rotate: -45, translateY: -6 } : { rotate: 0 }} />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              className="absolute left-0 right-0 mt-3 md:hidden px-4"
            >
              <div className="rounded-2xl bg-gradient-to-br from-black/80 to-slate-900/80 border border-cyan-500/10 p-4 shadow-xl backdrop-blur-xl">
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className={`block w-full text-left px-4 py-2 rounded-xl transition-all flex gap-3 items-center ${
                        isActive("/") ? "bg-white/10 text-cyan-400" : "text-gray-200 hover:bg-white/10"
                      }`}
                    >
                      <motion.div whileHover={{ rotate: 10 }}><FaHome /></motion.div> Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className={`block w-full text-left px-4 py-2 rounded-xl transition-all flex gap-3 items-center ${
                        isActive("/about") ? "bg-white/10 text-cyan-400" : "text-gray-200 hover:bg-white/10"
                      }`}
                    >
                      <motion.div whileHover={{ rotate: 10 }}><FaInfoCircle /></motion.div> About
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        router.push("/paymentpage");
                        setOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-all"
                    >
                      <motion.div whileHover={{ rotate: 10 }}><FaCoffee /></motion.div> Donate
                    </button>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
