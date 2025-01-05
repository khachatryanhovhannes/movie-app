"use client";

import Link from "next/link";
import { NAV_ITEMS } from "../../constants/index";
import Logo from "../logo";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <div className="text-white flex justify-between items-center py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <Logo />
        <nav className="flex gap-8">
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
      </div>
    </header>
  );
}
