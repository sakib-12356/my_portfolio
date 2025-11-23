import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const NavbarLinks = [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "About", link: "#about" },
        { id: 3, name: "Skills", link: "#skills" },
        { id: 4, name: "Experience", link: "#experience" },
        // { id: 5, link: "#contact"}

    ];

    return (
        <header className="fixed top-0 left-0 z-20 w-full text-white" data-aos="fade-up" data-aos-delay="300">
            <div className="container flex items-center justify-between p-5 mx-auto">
                <h1 className="ml-2 text-4xl italic font-bold text-white">Portfolio</h1>

                {/* Mobile menu toggle button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    <FiX className="w-8 h-8 text-white" />
                </button>

                {/* Desktop Navigation */}
                <nav className="items-center hidden md:flex space-x-7">
                    {NavbarLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.link}
                            className="text-lg hover:text-gray-200">
                            {link.name}
                        </a>
                    ))}
                    <button 
                        className="px-2 py-2 text-lg text-white border-2 rounded-xl focus:outline-none hover:bg-purple-800">
                        {" "}
                        Contact{" "}
                    </button>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`${isOpen ? 'block' : 'hidden'} bg-[#801b9c] absolute top-0 left-0 w-full h-screen
                 flex flex-col items-center judtify-center space-y-8 md:hidden pt-16`}
            >
                {/* close button*/}

                <button
                    className="absolute text-white top-5 right-5"
                    onClick={() => setIsOpen(!isOpen)}>
                </button>
                {NavbarLinks.map((link) => (
                    <a key={link.id} href={link.link}
                        className="text-lg text-white hover:text-gray-300"
                        oneClick={() => setIsOpen(!isOpen)}>
                        {link.FiMenu}
                    </a>
                ))}
                {/* contact button */}

                <button 
                    className="inline-flex px-6 py-2 text-white border-2 rounded-xl focus:outline-none hover:bg-pueple-800">
                    Contact
                </button>
            </div>
        </header>
    );
}
