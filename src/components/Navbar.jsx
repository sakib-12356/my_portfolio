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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 z-20 w-full text-white bg-[#801b9c] shadow-lg">
      <div className="container flex items-center justify-between p-5 mx-auto">

        {/* Logo */}
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
            <a key={link.id} href={link.link} className="text-lg hover:text-gray-200">
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3 py-2 text-lg border-2 rounded-xl hover:bg-purple-900"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden fixed inset-0 z-30 flex-col justify-center items-center bg-[#801b9c]`}
      >
        {/* Nav Links */}
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="mb-6 text-2xl hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* Contact Button */}
        <a
          href="#contact"
          className="px-8 py-3 text-xl border-2 rounded-xl hover:bg-purple-900"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
