import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import assets from "./assets/assets";
import AboutMe from './components/AboutMe'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");

    if (saved) return saved === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY

  return (
    <div className="dark:bg-darkTheme dark:text-white transition-colors duration-500 scroll-smooth">
      <img src={assets.bgGrad} alt="KuchToBaatThiUsme" className="fixed -z-100 w-full h-full object-cover opacity-30 dark:hidden"/>
      <Navbar setDarkMode={setDarkMode} isDarkMode={darkMode} />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact accessKey={accessKey} />
      <Footer />
    </div>
  );
}