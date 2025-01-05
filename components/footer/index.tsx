import Link from "next/link";
import Logo from "../logo";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
      <div className="w-full border-t-2 border-red-400 items-center md:items-stretch py-6 flex flex-col gap-5 md:flex-row justify-between">
        <Logo />

        {/* Movies Section */}
        <div className="flex flex-col items-center" aria-label="Movies section">
          <Link href="/movies" aria-label="Go to Movies page">
            Movies
          </Link>
          <div className="text-gray-400 flex flex-col items-center">
            <Link
              href="/movies?distinctive=now_playing"
              aria-label="Go to Now Playing movies"
            >
              Now Playing
            </Link>
            <Link
              href="/movies?distinctive=top_rated"
              aria-label="Go to Top Rated movies"
            >
              Top Rated
            </Link>
            <Link
              href="/movies?distinctive=upcoming"
              aria-label="Go to Upcoming movies"
            >
              Upcoming
            </Link>
            <Link
              href="/movies?distinctive=popular"
              aria-label="Go to Popular movies"
            >
              Popular
            </Link>
          </div>
        </div>

        {/* Series Section */}
        <div className="flex flex-col items-center" aria-label="Series section">
          <Link href="/series" aria-label="Go to Series page">
            Series
          </Link>
          <div className="text-gray-400 flex flex-col items-center">
            <Link
              href="/series?distinctive=airing_today"
              aria-label="Go to Airing Today series"
            >
              Airing Today
            </Link>
            <Link
              href="/series?distinctive=on_the_air"
              aria-label="Go to On The Air series"
            >
              On The Air
            </Link>
            <Link
              href="/series?distinctive=top_rated"
              aria-label="Go to Top Rated series"
            >
              Top Rated
            </Link>
            <Link
              href="/series?distinctive=popular"
              aria-label="Go to Popular series"
            >
              Popular
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div
          className="flex items-center space-x-6 text-4xl"
          aria-label="Social media links"
        >
          <Link
            href="https://twitter.com/yourhandle"
            target="_blank"
            aria-label="Go to Twitter"
          >
            <FaTwitter fill="lightblue" />
          </Link>
          <Link
            href="https://facebook.com/yourpage"
            target="_blank"
            aria-label="Go to Facebook"
          >
            <FaFacebook fill="blue" />
          </Link>
          <Link
            href="https://instagram.com/yourhandle"
            target="_blank"
            aria-label="Go to Instagram"
          >
            <FaYoutube fill="red" />
          </Link>
        </div>
      </div>

      {/* Footer Copyright Section */}
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
