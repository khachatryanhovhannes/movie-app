import { Pagination, SeriesCard } from "@/components";
import SmallButton from "@/components/small_button";
import { getTvGenres, seriesPageGet } from "@/services/api";
import Link from "next/link";

interface ISeriesPageProps {
  searchParams: {
    distinctive?: "top_rated" | "popular" | "airing_today" | "on_the_air";
    page?: number;
    genre?: number;
  };
}

export default async function Series({ searchParams }: ISeriesPageProps) {
  const { distinctive = "popular", page = 1, genre } = await searchParams;

  const [series, genres] = await Promise.all([
    seriesPageGet({ distinctive, page, genre }),
    getTvGenres(),
  ]);
  return (
    <main>
      <div className="grid grid-cols-5 py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
        <section className="col-span-1">
          <div className="flex flex-col gap-2">
            {genres.map((g) => (
              <Link
                href={`/series?genre=${g.id}&page=1`}
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
                href="/series?distinctive=popular"
              />
              <SmallButton
                text="Top Rated"
                bgColor="red"
                color="white"
                href="/series?distinctive=top_rated"
              />
              <SmallButton
                text="Airing Today"
                bgColor="red"
                color="white"
                href="/series?distinctive=airing_today"
              />
              <SmallButton
                text="On The Air"
                bgColor="red"
                color="white"
                href="/series?distinctive=on_the_air"
              />
            </div>
          </div>

          {series.results.length > 0 ? (
            <div className="grid grid-cols-4 gap-4 py-4">
              {series.results.map((movie) => (
                <SeriesCard key={movie.id} movie={movie} />
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
              length={series.total_pages}
              href={`/series?${genre ? "genre=" + genre + "&" : ""}${
                distinctive ? "distinctive=" + distinctive : ""
              }`}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
