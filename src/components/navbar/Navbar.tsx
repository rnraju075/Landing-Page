import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/motion";
const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(true);
  const [isActiveLink, setisActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <motion.nav 
    variants={fadeIn("down", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    className="fixed top-0 right-0 left-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-10 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div>
          <img src="src/assets/fav-icon.png" alt="logo" />
        </div>
        {/* mobile navigation */}
        <button onClick={() => setisMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <HiX size={"25px"} /> : <HiMenu size={"25px"} />}
        </button>
        {/* navigation menu */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setisActiveLink(link.href);
                }}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${isActiveLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"} `}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* get in touch button */}
        <button className="hidden md:block  text-white px-6 bg-blue-600 hover:bg-blue-700 py-2.5 rounded-lg font-medium transition-all  hover:shadow-lg">
          <a href="#newsletter">Get in Touch</a>
        </button>
      </div>
      {/* mobile navigation options */}
      { isMenuOpen && 
          <div className="md:hidden bg-white border-t border-gray-100 py-4 ">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => {
              return (
                <a onClick={() => {
                  setisActiveLink(link.href);
                  setisMenuOpen(false)
                }} 
                className={`block text-sm font-medium py-2 ${isActiveLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900 "}`} key={index} href={link.href}>
                  {link.label}{" "}
                </a>
              );
            })}
          </div>
          <button className="mx-auto block text-white px-28 bg-blue-600 hover:bg-blue-700 py-2.5 rounded-lg font-medium transition-all  hover:shadow-lg">
          <a href="#newsletter">Get in Touch</a>
        </button>
        </div>
      }
    </motion.nav>
  );
};

export default Navbar;
