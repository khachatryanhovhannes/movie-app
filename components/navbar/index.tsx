import Link from "next/link";
import { NAV_ITEMS } from "../../constants/index";
import Logo from "../logo";
export default function Navbar() {
  return (
    <header>
      <div className="text-white flex justify-between items-center py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <Logo />
        <nav>
          {NAV_ITEMS.map((nav_item) => (
            <Link href={nav_item.href} key={nav_item.label}>
              {nav_item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
