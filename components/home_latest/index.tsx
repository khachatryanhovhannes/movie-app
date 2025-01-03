import { IMovie } from "@/models";
import { getRecently } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { MdLanguage, MdCalendarMonth } from "react-icons/md";

export default async function HomeLatest() {
  const recentlyMovies: IMovie[] = await getRecently();

  return (
    <section className=" py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className=" pt-8 pb-2 flex justify-between items-end">
        <h3 className="text-white text-2xl">Upcoming Movies</h3>
        <div className="text-red-600 underline underline-offset-4">
          <Link href="">More...</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {recentlyMovies.map((movie) => (
          <div
            key={movie.id}
            className="text-white flex gap-3 p-3 border-2 border-gray-600 rounded-md"
          >
            <div className="w-1/3 relative aspect-[2/3]">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                fill
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4>{movie.title}</h4>
                <p className="flex items-center gap-1">
                  <MdCalendarMonth />
                  {movie.release_date}
                </p>
                <p className="flex items-center gap-1">
                  <MdLanguage /> {movie.original_language}
                </p>
              </div>
              <div className="text-red-600 underline underline-offset-4">
                <Link href="">More...</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
