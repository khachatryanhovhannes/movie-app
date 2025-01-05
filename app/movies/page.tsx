import { MovieCard, Pagination } from "@/components";
import { getGenres, moviesPageGet } from "@/services/api";
import Link from "next/link";
import SmallButton from "../../components/small_button/index";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies | G Movies App",
  description:
    "Browse a wide selection of movies, including popular, top-rated, now playing, and upcoming titles. Find the perfect movie to watch today.",
  openGraph: {
    title: "Movies | G Movies App",
    description:
      "Explore the latest movies across various genres and categories like popular, top-rated, and upcoming. Find something for everyone.",
    url: "https://g-movies-app.netlify.app/movies", // Replace with your actual URL
    images: [
      {
        url: "/images/hero.jpg", // Replace with an actual image related to movies
        width: 1920,
        height: 1080,
        alt: "Movies at G Movies App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movies | G Movies App",
    description:
      "Browse through popular, top-rated, and upcoming movies at G Movies App. Find the latest and best movies for every mood.",
    images: ["/images/hero.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://g-movies-app.netlify.app/movies", // Replace with the actual canonical URL
  },
};

interface IMoviesPageProps {
  searchParams: {
    distinctive?: "top_rated" | "popular" | "now_playing" | "upcoming";
    page?: number;
    genre?: number;
  };
}

export default async function Movies({ searchParams }: IMoviesPageProps) {
  const { distinctive = "popular", page = 1, genre } = await searchParams;

  const [movies, genres] = await Promise.all([
    moviesPageGet({ distinctive, page, genre }),
    getGenres(),
  ]);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
        <section className="hidden md:block col-span-1">
          <div className="flex flex-col gap-2">
            {genres.map((g) => (
              <Link
                href={`/movies?genre=${g.id}&page=1`}
                key={g.id}
                className={`${genre === g.id ? "text-red-500 font-bold" : ""}`}
                aria-label={`Filter movies by ${g.name} genre`}
              >
                {g.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="col-span-1 md:col-span-4">
          <div className="md:flex-row flex-col flex justify-between items-center mb-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              aria-live="polite"
            >
              {distinctive.replace("_", " ").toUpperCase()} MOVIES
            </h2>
            <div className="flex gap-3 mt-3 justify-center md:mt-0 flex-wrap md:flex-nowrap">
              <SmallButton
                text="Popular"
                bgColor="red"
                color="white"
                href="/movies?distinctive=popular"
                aria-label="Show popular movies"
              />
              <SmallButton
                text="Top Rated"
                bgColor="red"
                color="white"
                href="/movies?distinctive=top_rated"
                aria-label="Show top-rated movies"
              />
              <SmallButton
                text="Now Playing"
                bgColor="red"
                color="white"
                href="/movies?distinctive=now_playing"
                aria-label="Show movies currently playing"
              />
              <SmallButton
                text="Upcoming"
                bgColor="red"
                color="white"
                href="/movies?distinctive=upcoming"
                aria-label="Show upcoming movies"
              />
            </div>
          </div>

          {movies.results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
              {movies.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <p className="text-center py-4 text-gray-400">
              No movies found for this genre.
            </p>
          )}

          <div>
            <Pagination
              page={page}
              length={movies.total_pages}
              href={`/movies?${genre ? "genre=" + genre + "&" : ""}${
                distinctive ? "distinctive=" + distinctive : ""
              }`}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
