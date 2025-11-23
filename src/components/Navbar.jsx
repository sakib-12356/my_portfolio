import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Experience", link: "#experience" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const whatsappNumber = "8801302631009";
  const defaultMessage = "Hello! I want to contact you.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <header className="fixed top-0 left-0 z-20 w-full text-white bg-[#801b9c] shadow-lg transition-all duration-300">
      <div className="container flex items-center justify-between p-5 mx-auto">
        <h1 className="text-3xl italic font-bold">Portfolio</h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
        </button>

        {/* Desktop Menu */}
        <nav className="items-center hidden md:flex space-x-7">
          {NavbarLinks.map((link) => (
            <a key={link.id} href={link.link} className="text-lg transition-colors duration-300 hover:text-gray-200">
              {link.name}
            </a>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-lg transition-all duration-300 transform bg-transparent border-2 rounded-xl hover:bg-purple-900 hover:scale-105"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden fixed inset-0 z-30 flex-col justify-center items-center bg-[#801b9c] overflow-y-auto py-20 transition-all duration-300`}
      >
        <div className="flex flex-col items-center w-full max-w-xs mx-auto space-y-6">
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-2xl transition-colors duration-300 hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-xl transition-all duration-300 transform bg-transparent border-2 rounded-xl hover:bg-purple-900 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
