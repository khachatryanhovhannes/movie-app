import Link from "next/link";
import Logo from "../logo";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
      <div className="w-full border-t-2 border-red-400 items-center md:items-stretch py-6 flex flex-col gap-5 md:flex-row justify-between">
        <Logo />
        <div className="flex flex-col items-center">
          <Link href="/movies">Movies</Link>
          <div className="text-gray-400 flex flex-col items-center">
            <Link href="/movies?distinctive=now_playing">Now Playing</Link>
            <Link href="/movies?distinctive=top_rated">Top Rated</Link>
            <Link href="/movies?distinctive=upcoming">Upcoming</Link>
            <Link href="/movies?distinctive=popular">Popular</Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/series">Series</Link>
          <div className="text-gray-400 flex flex-col items-center">
            <Link href="/series?distinctive=airing_today">Airing Today</Link>
            <Link href="/series?distinctive=on_the_air">On The Air</Link>
            <Link href="/series?distinctive=top_rated">Top Rated</Link>
            <Link href="/series?distinctive=popular">Popular</Link>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-4xl">
          <Link href="https://twitter.com/yourhandle" target="_blank">
            <FaTwitter fill="lightblue" />
          </Link>
          <Link href="https://facebook.com/yourpage" target="_blank">
            <FaFacebook fill="blue" />
          </Link>
          <Link href="https://instagram.com/yourhandle" target="_blank">
            <FaYoutube fill="red" />
          </Link>
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-center text-sm">
          <span className="border-t-2 border-red-200 pt-2">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
