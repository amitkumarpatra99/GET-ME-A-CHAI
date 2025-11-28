/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaImages } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/about", label: "About", icon: FaInfoCircle },
  { href: "/contact", label: "Contact", icon: FaPhoneAlt },
  { href: "/gallery", label: "Gallery", icon: FaImages },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  // Sticky hide/show on scroll
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

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (route) => pathname === route;

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-4 md:inset-x-12 top-6 z-50 pointer-events-auto"
    >
      <nav
        aria-label="Primary"
        className="mx-auto w-full max-w-5xl backdrop-blur-xl bg-slate-950/70 border border-slate-800/60 rounded-full px-4 md:px-6 py-2.5 shadow-2xl shadow-black/40 transition-all"
      >
        <div className="flex items-center justify-between gap-4">
          
          {/* BRAND */}
          <Link href="/" className="flex items-center gap-2 select-none group" aria-label="Warm Cup - Home">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-black text-sm md:text-base tracking-wider uppercase">
                Warm <span className="text-cyan-400 font-bold">Cup</span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium tracking-tight">by MR PATRA</div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div 
            className="hidden md:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  className={`relative px-4 py-2 flex items-center gap-2 text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
                    active ? "text-cyan-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  
                  {/* Sliding Hover Background */}
                  {hoveredPath === item.href && (
                    <motion.div
                      layoutId="nav-hover-bg"
                      className="absolute inset-0 bg-slate-800/50 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  
                  {/* Underline for Active Item */}
                  {active && (
                    <motion.div 
                      layoutId="nav-active-line"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" 
                    />
                  )}
                </Link>
              );
            })}

            <div className="h-5 w-[1px] bg-slate-800 mx-2" />

            <button
              onClick={() => router.push("/paymentpage")}
              className="group flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 active:scale-95"
            >
              <Coffee className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Give a Cup</span>
            </button>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Donate"
              onClick={() => router.push("/paymentpage")}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800 transition active:scale-95"
            >
              <Coffee className="w-[18px] h-[18px]" />
            </button>

            {/* MORPHING HAMBURGER */}
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full bg-slate-900 border border-slate-800 transition-colors"
            >
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "opacity-0" : ""}`} />
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, scale: 0.96, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -4 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute left-0 right-0 mt-4 md:hidden"
            >
              <div className="rounded-2xl bg-slate-950/95 border border-slate-800/80 p-3 shadow-2xl backdrop-blur-2xl mx-1">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`w-full px-4 py-3 rounded-xl flex gap-3 items-center text-sm font-medium transition-all ${
                            active 
                              ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border-l-2 border-cyan-400" 
                              : "text-slate-300 hover:bg-slate-900"
                          }`}
                        >
                          <item.icon className="w-[18px] h-[18px]" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}

                  <li className="pt-2 mt-1 border-t border-slate-900">
                    <button
                      onClick={() => {
                        router.push("/paymentpage");
                        setOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/10 transition-all"
                    >
                      <Coffee className="w-4 h-4" />
                      <span>Give a Cup</span>
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