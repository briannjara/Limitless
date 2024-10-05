"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ShinyButton from "@/components/ui/shiny-button";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`z-50 fixed top-0 left-0 right-0 h-[80px] transition-all duration-300 ${
      isScrolled ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-screen-xl">
        <div className="flex items-center justify-between h-full">
          <header className="flex items-center">
            <svg
              className="w-[24px] h-[24px] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <g fill="#8A53E1" clipPath="url(#a)">
                <g opacity=".66">
                  <path d="M12.9761 7.2573c-.134-.01168-.2414-.11909-.2532-.25329-.0473-.5424-.107-1.06543-.1779-1.56483-.0436-.30586.0802-.61395.333-.7916 1.9081-1.34124 3.4038-1.9422 3.9072-1.43895.5023.50234-.0954 1.99315-1.4313 3.89612-.1777.25321-.4863.37714-.7926.33335-.5054-.07228-1.0353-.13294-1.5852-.1808ZM15.3539 12.8889c-.1777-.2532-.4863-.3772-.7926-.3334-.5054.0724-1.0353.133-1.5852.1809-.134.0117-.2414.119-.2532.2533-.0473.5424-.107 1.0655-.1779 1.5648-.0436.3059.0802.6139.333.7916 1.9083 1.3413 3.4038 1.9424 3.9072 1.4391.5023-.5025-.0954-1.9933-1.4313-3.8963ZM7.09005 15.3642c.25346-.1776.37761-.4863.33385-.7927-.07206-.5046-.1326-1.0333-.18028-1.5818-.01178-.1343-.11915-.2416-.25328-.25328-.54107-.0471-1.06289-.1066-1.56115-.1773-.30605-.0435-.61432.0805-.79187.3335-1.33407 1.9013-1.93063 3.3905-1.4287 3.8926.50118.5008 1.98551-.0924 3.88143-1.421ZM5.42919 7.43467c-.30605.04348-.61432-.08052-.79187-.33356-1.33407-1.90122-1.93063-3.39049-1.4287-3.89249.50118-.50097 1.9855.09238 3.88141 1.4209.25347.17762.37762.48635.33387.79274-.07206.50449-.1326 1.0332-.18028 1.58175-.01178.13419-.11915.2416-.25328.25328-.54107.0471-1.06289.10661-1.56115.17738Z" />
                </g>
                <path d="M12.0939 7.12002c.0302.42032.3659.75599.7861.78617C16.7749 8.18581 19.6 9.01749 19.6 10c0 .9826-2.8251 1.8142-6.72 2.0939-.4202.0301-.7559.3658-.7861.7861-.2796 3.8949-1.1113 6.72-2.0939 6.72-.98251 0-1.81429-2.8251-2.09387-6.72-.03017-.4203-.36585-.756-.78617-.7861C3.22518 11.8142.40002 10.9826.40002 10c0-.98251 2.82516-1.81419 6.71994-2.09381.42032-.03018.756-.36585.78617-.78617.27958-3.8948 1.11136-6.72 2.09387-6.72.9826 0 1.8143 2.8252 2.0939 6.72Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#8A53E1" d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-2xl font-bold">Limitless</span>
          </header>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex gap-8 font-semibold text-[16px]">
              <Link href="/" className="hover:text-purple-600 transition-colors">Meetings</Link>
              <Link href="/" className="hover:text-purple-600 transition-colors">Pendant</Link>
              <Link href="/" className="hover:text-purple-600 transition-colors">Privacy</Link>
            </div>
            <div className="btn">
              <ShinyButton>Get Started</ShinyButton>
            </div>
          </div>

          {/* Smooth Toggle Button for Mobile */}
          <motion.button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-5 flex flex-col justify-between"
              initial="closed"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span className="w-full h-0.5 bg-current rounded-full" variants={topLineVariants} />
              <motion.span className="w-full h-0.5 bg-current rounded-full" variants={middleLineVariants} />
              <motion.span className="w-full h-0.5 bg-current rounded-full" variants={bottomLineVariants} />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg p-6 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              <Link href="/" className="font-semibold text-[16px] hover:text-purple-600 transition-colors">
                Meetings
              </Link>
              <Link href="/" className="font-semibold text-[16px] hover:text-purple-600 transition-colors">
                Pendant
              </Link>
              <Link href="/" className="font-semibold text-[16px] hover:text-purple-600 transition-colors">
                Privacy
              </Link>
              <div className="mt-6">
                <ShinyButton>Get Started</ShinyButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const topLineVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: 45, translateY: 8 },
};

const middleLineVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const bottomLineVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: -45, translateY: -8 },
};

export default Nav;