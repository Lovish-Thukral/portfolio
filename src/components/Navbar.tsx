import React, { useEffect, useRef, useState } from "react";
import assets from "../assets/assets";

interface NavbarProps {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ isDarkMode, setDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Gradient */}
      <img
        src={assets.bgGrad}
        alt="background-gradient"
        className="fixed top-0 right-0 w-full -z-20 opacity-20 dark:hidden"
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 lg:px-16 py-4 transition-all duration-300 font-serif
        ${
          isScrolled
            ? "backdrop-blur-lg bg-white/70 dark:bg-darkTheme/80 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home">
          <img
            src={assets.signature}
            alt="Lovish Logo"
            className="h-14 object-contain dark:invert"
          />
        </a>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex items-center gap-10 px-10 py-3 rounded-full border transition-all
          ${
            isScrolled
              ? "border-transparent"
              : "border-neutral-300 dark:border-white/20 bg-white/40 dark:bg-transparent backdrop-blur-md"
          }`}
        >
          <li>
            <a href="#home" className="dark:text-white">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="dark:text-white">
              About
            </a>
          </li>

          <li>
            <a href="#work" className="dark:text-white">
              Work
            </a>
          </li>

          <li>
            <a href="#contact" className="dark:text-white">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="cursor-pointer"
          >
            <img
              src={isDarkMode ? assets.light : assets.dark}
              alt="theme-toggle"
              className="w-7 h-7 object-contain"
            />
          </button>

          {/* Connect Button */}
          <a
            href="https://www.linkedin.com/in/lavi-khatri/"
            target="_blank"
            className="hidden sm:flex items-center gap-2 px-7 py-2.5 rounded-full border border-neutral-400 dark:border-white/30 dark:text-white hover:scale-105 transition"
          >
            Connect <img src={assets.link} alt="link" className="h-3.5 dark:invert brightness-0" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            className="md:hidden cursor-pointer"
          >
            <img
              src={assets.menu}
              alt="menu"
              className="w-7 h-7 object-contain dark:invert brightness-0"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-[-16rem] w-64 h-screen bg-white dark:bg-darkTheme transition-transform duration-500 md:hidden shadow-2xl z-100"
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6"
        >
          X
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-8 mt-24 px-10 text-lg dark:text-white">
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;