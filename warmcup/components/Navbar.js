/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";

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

          {/* BRAND */}
          <Link href="/" className="flex items-center gap-3 select-none" aria-label="Warm Cup - Home">
            <motion.div whileHover={{ scale: 1.05 }} className="leading-tight">
              <div className="text-white font-extrabold text-sm md:text-base tracking-wide">
                ☕ WARM <span className="text-cyan-400">CUP</span>
              </div>
              <div className="text-xs ml-5 text-gray-300 m-0.5">by MR PATRA</div>
            </motion.div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isActive("/") ? "text-cyan-400" : "text-gray-200 hover:text-white"
                }`}
            >
              <motion.div whileHover={{ rotate: 10 }}><FaHome /></motion.div> Home
            </Link>

            <Link
              href="/about"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isActive("/about") ? "text-cyan-400" : "text-gray-200 hover:text-white"
                }`}
            >
              <motion.div whileHover={{ rotate: 10 }}><FaInfoCircle /></motion.div> About
            </Link>

            <button
              onClick={() => router.push("/paymentpage")}
              className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-cyan-500/70 to-blue-500/60 text-white px-4 py-2 rounded-full shadow-md hover:scale-[1.02] transition"
            >
              <motion.div whileHover={{ rotate: 10 }}><Coffee /></motion.div> Give a Cup
            </button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-3">
            <button
              aria-label="Donate"
              onClick={() => router.push("/paymentpage")}
              className="p-2 rounded-md bg-cyan-600/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-600/15 transition"
            >
              <motion.div whileHover={{ rotate: 15 }}><Coffee /></motion.div>
            </button>

            {/* HAMBURGER */}
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full 
             bg-white/5 backdrop-blur-md border border-white/10 
             hover:scale-105 transition-all"
            >
              <AnimatePresence mode="wait">
                {!open ? (
                  /* Smaller •••  Dots */
                  <motion.div
                    key="dots"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-white"></span>
                    <span className="w-1 h-1 rounded-full bg-white"></span>
                    <span className="w-1 h-1 rounded-full bg-white"></span>
                  </motion.div>
                ) : (
                  /* X icon */
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" stroke="white">
                      <motion.path
                        d="M6 6L18 18"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <motion.path
                        d="M18 6L6 18"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>


          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
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
                      className={`block w-full px-4 py-2 rounded-xl flex gap-3 items-center ${isActive("/") ? "bg-white/10 text-cyan-400" : "text-gray-200 hover:bg-white/10"
                        }`}
                    >
                      <motion.div whileHover={{ rotate: 10 }}><FaHome /></motion.div> Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className={`block w-full px-4 py-2 rounded-xl flex gap-3 items-center ${isActive("/about") ? "bg-white/10 text-cyan-400" : "text-gray-200 hover:bg-white/10"
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
                      className="w-full flex items-center gap-3 px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-all"
                    >
                      <motion.div whileHover={{ rotate: 10 }}><Coffee /></motion.div> Give a Cup
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
