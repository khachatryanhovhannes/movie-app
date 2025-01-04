import { MovieCard, Pagination } from "@/components";
import { getGenres, moviesPageGet } from "@/services/api";
import Link from "next/link";

import SmallButton from "../../components/small_button/index";

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
      <div className="grid grid-cols-5 py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
        <section className="col-span-1">
          <div className="flex flex-col gap-2">
            {genres.map((g) => (
              <Link
                href={`/movies?genre=${g.id}&page=1`}
                key={g.id}
                className={`${genre === g.id ? "text-red-500 font-bold" : ""}`}
              >
                {g.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="col-span-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">
              {distinctive.replace("_", " ").toUpperCase()} MOVIES
            </h2>
            <div className="flex gap-3">
              <SmallButton
                text="Popular"
                bgColor="red"
                color="white"
                href="/movies?distinctive=popular"
              />
              <SmallButton
                text="Top Rated"
                bgColor="red"
                color="white"
                href="/movies?distinctive=top_rated"
              />
              <SmallButton
                text="Now Playing"
                bgColor="red"
                color="white"
                href="/movies?distinctive=now_playing"
              />
              <SmallButton
                text="Upcoming"
                bgColor="red"
                color="white"
                href="/movies?distinctive=upcoming"
              />
            </div>
          </div>

          {movies.results.length > 0 ? (
            <div className="grid grid-cols-3 gap-4 py-4">
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
              href={`/movies?${genre ? "genre=" + genre : ""}${
                distinctive ? "distinctive=" + distinctive : ""
              }`}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
