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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
        {/* Genre Section */}
        <section
          className="hidden md:block col-span-1"
          aria-labelledby="genre-section"
        >
          <h3 id="genre-section" className="sr-only">
            Available genres for series
          </h3>
          <div className="flex flex-col gap-2">
            {genres.map((g) => (
              <Link
                href={`/series?genre=${g.id}&page=1`}
                key={g.id}
                className={`${genre === g.id ? "text-red-500 font-bold" : ""}`}
                aria-label={`View series in ${g.name} genre`}
              >
                {g.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="col-span-1 md:col-span-4">
          <div className="md:flex-row flex-col flex justify-between items-center mb-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              id="series-header"
            >
              {distinctive.replace("_", " ").toUpperCase()} SERIES
            </h2>
            <div
              className="flex gap-3 mt-3 justify-center md:mt-0 flex-wrap md:flex-nowrap"
              aria-labelledby="series-header"
            >
              <SmallButton
                text="Popular"
                bgColor="red"
                color="white"
                href="/series?distinctive=popular"
                aria-label="View popular series"
              />
              <SmallButton
                text="Top Rated"
                bgColor="red"
                color="white"
                href="/series?distinctive=top_rated"
                aria-label="View top rated series"
              />
              <SmallButton
                text="Airing Today"
                bgColor="red"
                color="white"
                href="/series?distinctive=airing_today"
                aria-label="View series airing today"
              />
              <SmallButton
                text="On The Air"
                bgColor="red"
                color="white"
                href="/series?distinctive=on_the_air"
                aria-label="View series on the air"
              />
            </div>
          </div>

          {series.results.length > 0 ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4"
              aria-live="polite"
            >
              {series.results.map((series) => (
                <SeriesCard key={series.id} movie={series} />
              ))}
            </div>
          ) : (
            <p className="text-center py-4 text-gray-400">
              No series found for this genre.
            </p>
          )}

          <div>
            <Pagination
              page={page}
              length={series.total_pages}
              href={`/series?${genre ? "genre=" + genre + "&" : ""}${
                distinctive ? "distinctive=" + distinctive : ""
              }`}
              aria-label="Pagination controls"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
