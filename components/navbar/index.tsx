"use client";

import Link from "next/link";
import { NAV_ITEMS } from "../../constants/index";
import Logo from "../logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="text-white flex justify-between items-center py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((nav_item) => (
            <Link href={nav_item.href} key={nav_item.label}>
              <span
                className={`${
                  pathname === nav_item.href ? "text-red-500" : ""
                }`}
              >
                {nav_item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Icon Button */}
        <button
          aria-label="Open menu"
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
        >
          <HiMenu />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 z-[100] bg-black w-3/4 h-screen p-8 flex flex-col gap-6 text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div>
          <button
            onClick={toggleMenu}
            className="w-full text-white text-xl font-bold"
          >
            <IoClose />
          </button>
        </div>
        <nav className="h-full flex flex-col items-center gap-4">
          {NAV_ITEMS.map((nav_item) => (
            <Link
              href={nav_item.href}
              key={nav_item.label}
              onClick={toggleMenu}
            >
              <span
                className={`${
                  pathname === nav_item.href ? "text-red-500" : ""
                }`}
              >
                {nav_item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
