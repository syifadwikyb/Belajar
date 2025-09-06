// src/components/Header.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#inovasi", text: "Inovasi Kita" },
    { href: "#edukasi", text: "Edukasi Sampah" },
    { href: "#tentang", text: "Tentang Desa" },
  ];

  return (
    <header className="bg-green-600 text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / Nama Desa */}
        <h1 className="text-2xl font-bold tracking-wide">Desa Tedunan</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="hover:text-green-200 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="block px-4 py-2 border-b border-green-500 hover:bg-green-500"
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
