import { getTvGenres } from "@/services/api";
import Link from "next/link";

interface IMoviesPageProps {
  searchParams: {
    distinctive?: "top_rated" | "popular" | "airing_today" | "on_the_air";
    page?: number;
    genre?: number;
  };
}

export default async function Series({ searchParams }: IMoviesPageProps) {
  const { distinctive = "popular", page = 1, genre } = await searchParams;

  const [genres] = await Promise.all([getTvGenres()]);
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
      </div>
    </main>
  );
}
