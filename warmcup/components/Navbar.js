/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Home,
  Sparkles,
  Image as ImageIcon,
  HelpCircle,
  Send,
  Heart,
  ArrowRight,
  ChevronRight,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Sparkles },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  { name: "Contact", href: "/contact", icon: Send },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const navRef = useRef(null);

  // Detect scroll for adaptive glassmorphism depth
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open & listen for escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  // Check if link is active
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  return (
    <>
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-50 px-2.5 sm:px-4 md:px-6 lg:px-8 pt-2.5 sm:pt-3.5 transition-all duration-300 pointer-events-none"
      >
        <div className="max-w-6xl mx-auto w-full pointer-events-auto">
          <nav
            aria-label="Main Navigation"
            className={`relative rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-[#080d1a]/90 backdrop-blur-xl border border-cyan-500/30 shadow-[0_12px_35px_-10px_rgba(6,182,212,0.35)] py-1.5 sm:py-2 md:py-2.5 px-3 sm:px-4 md:px-6"
                : "bg-[#0b1329]/75 backdrop-blur-lg border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:border-cyan-500/25 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6"
            }`}
          >
            {/* Ambient top light gradient */}
            <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between gap-1.5 sm:gap-3 md:gap-4">
              {/* 🌟 BRAND LOGO */}
              <Link
                href="/"
                className="group flex items-center gap-2 sm:gap-2.5 md:gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full py-0.5 sm:py-1 shrink-0"
                aria-label="Warm Cup Home"
              >
                {/* Steaming Coffee Badge */}
                <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:scale-105 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 shrink-0">
                  {/* Rising Steam Effect */}
                  <div className="absolute -top-1.5 flex gap-0.5 justify-center w-full pointer-events-none">
                    <span className="w-0.5 h-2 bg-cyan-300/80 rounded-full animate-steam-1" />
                    <span className="w-0.5 h-2.5 bg-blue-300/80 rounded-full animate-steam-2" />
                    <span className="w-0.5 h-2 bg-cyan-300/80 rounded-full animate-steam-3" />
                  </div>
                  <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300 shrink-0" />
                </div>

                {/* Brand Text */}
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="font-black text-xs sm:text-sm md:text-base tracking-wider text-white group-hover:text-cyan-200 transition-colors whitespace-nowrap">
                      WARM <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">CUP</span>
                    </span>
                    <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      v2.0
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-gray-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate max-w-[85px] xs:max-w-[110px] sm:max-w-none">by MR PATRA</span>
                  </div>
                </div>
              </Link>

              {/* 💻 DESKTOP NAV LINKS (md and up) */}
              <div
                className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 shadow-inner"
                onMouseLeave={() => setHoveredPath(null)}
              >
                {navLinks.map((item) => {
                  const active = isActive(item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onMouseEnter={() => setHoveredPath(item.href)}
                      className={`relative flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap ${
                        active
                          ? "text-cyan-300 font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {/* Hover Animated Pill */}
                      {hoveredPath === item.href && (
                        <motion.span
                          layoutId="navbar-hover-pill"
                          className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/15 backdrop-blur-sm"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}

                      {/* Active Indicator Glow */}
                      {active && !hoveredPath && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full -z-10 border border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}

                      <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? "text-cyan-400" : "text-gray-400"}`} />
                      <span>{item.name}</span>

                      {/* Active bottom glow dot */}
                      {active && (
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8] shrink-0" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* ⚡ RIGHT ACTIONS (Desktop CTA & Mobile Controls) */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
                {/* Desktop "Give a Cup" Button */}
                <button
                  onClick={() => router.push("/paymentpage")}
                  className="hidden md:relative md:inline-flex group items-center justify-center p-[1px] rounded-full overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shrink-0"
                  aria-label="Give a Cup to support"
                >
                  {/* Rotating Gradient Border */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-full opacity-90 group-hover:opacity-100 transition-opacity" />

                  {/* Inner Button Content */}
                  <span className="relative flex items-center gap-1.5 lg:gap-2 px-3.5 py-1.5 lg:px-5 lg:py-2 text-xs lg:text-sm font-semibold text-white bg-[#0b1329]/80 rounded-full backdrop-blur-sm group-hover:bg-[#0b1329]/60 transition-colors whitespace-nowrap">
                    <Coffee className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-cyan-300 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300 shrink-0" />
                    <span>Give a Cup</span>
                    <Heart className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-pink-400 fill-pink-400 animate-pulse-slow shrink-0" />

                    {/* Shimmer sweep effect */}
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
                  </span>
                </button>

                {/* Mobile "Give a Cup" Quick Action */}
                <button
                  onClick={() => router.push("/paymentpage")}
                  aria-label="Donate a cup"
                  className="md:hidden flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 md:px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-300 border border-cyan-400/30 text-[11px] sm:text-xs font-semibold hover:bg-cyan-500/35 transition active:scale-95 shadow-[0_0_12px_rgba(6,182,212,0.2)] shrink-0"
                >
                  <Coffee className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
                  <span className="hidden min-[360px]:inline">Give Cup</span>
                  <span className="min-[360px]:hidden">Give</span>
                </button>

                {/* 📱 MOBILE HAMBURGER BUTTON */}
                <button
                  type="button"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu-drawer"
                  aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                  onClick={() => setMobileOpen((prev) => !prev)}
                  className="md:hidden relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/15 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shrink-0"
                >
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex flex-col justify-between items-center">
                    <motion.span
                      animate={mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="w-full h-0.5 bg-white rounded-full origin-center"
                    />
                    <motion.span
                      animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="w-full h-0.5 bg-cyan-400 rounded-full"
                    />
                    <motion.span
                      animate={mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="w-full h-0.5 bg-white rounded-full origin-center"
                    />
                  </div>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* 📱 MOBILE NAVIGATION DRAWER & BACKDROP */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Slide-Down Menu Sheet */}
            <motion.div
              id="mobile-menu-drawer"
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="fixed inset-x-3 sm:inset-x-6 top-16 sm:top-20 z-50 md:hidden max-w-md mx-auto max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain custom-scrollbar rounded-3xl"
            >
              <div className="rounded-3xl bg-gradient-to-b from-[#0e172e]/95 via-[#080d1b]/95 to-[#050811]/98 border border-cyan-500/25 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden relative">
                {/* Top Subtle Glow */}
                <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />

                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                      <Coffee className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-200">Navigation</span>
                  </div>
                  <span className="text-[11px] text-cyan-300 font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    WarmCup App
                  </span>
                </div>

                {/* Staggered Navigation Links */}
                <ul className="flex flex-col gap-1.5 mb-3.5">
                  {navLinks.map((item, idx) => {
                    const active = isActive(item.href);
                    const Icon = item.icon;

                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all ${
                            active
                              ? "bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-transparent text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-semibold"
                              : "text-gray-200 hover:bg-white/5 hover:text-white border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                                active
                                  ? "bg-cyan-500/20 text-cyan-300"
                                  : "bg-white/5 text-gray-400"
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                            <span>{item.name}</span>
                          </div>

                          <ChevronRight
                            className={`w-4 h-4 transition-transform shrink-0 ${
                              active ? "text-cyan-400 translate-x-0.5" : "text-gray-500"
                            }`}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Quick Direct Donation Card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.25 }}
                  className="rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-slate-900/60 border border-cyan-500/20 p-3 sm:p-3.5 mb-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 shrink-0" /> Support Creator
                    </span>
                    <span className="text-[10px] text-cyan-300 font-medium">Quick Gift</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2.5">
                    {[
                      { cups: "1 Cup", amount: "₹50" },
                      { cups: "3 Cups", amount: "₹150" },
                      { cups: "5 Cups", amount: "₹250" },
                    ].map((tier, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setMobileOpen(false);
                          router.push("/paymentpage");
                        }}
                        className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-center transition-all group"
                      >
                        <span className="text-[10px] text-gray-300 group-hover:text-cyan-300 font-medium">
                          {tier.cups}
                        </span>
                        <span className="text-xs font-bold text-white group-hover:text-cyan-200">
                          {tier.amount}
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      router.push("/paymentpage");
                    }}
                    className="relative w-full overflow-hidden flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-md shadow-cyan-500/25 transition-all"
                  >
                    <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>Gift a Warm Cup</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 shrink-0" />
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
                  </button>
                </motion.div>

                {/* Creator signature & social links */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-white/10 text-xs text-gray-400">
                  <span className="text-[10px] sm:text-[11px]">Crafted with ☕ by MR PATRA</span>
                  <div className="flex items-center gap-3 text-gray-400">
                    <a
                      href="https://github.com/amitkumarpatra99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amitkumarpatra99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/mr_patraa_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
