import { IMovie } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface IHomeSectionsProps {
  title: string;
  movies: IMovie[];
  url: string;
  type: "series" | "movies";
}

export default function HomeSections({ ...props }: IHomeSectionsProps) {
  const { title, type, movies, url } = props;

  return (
    <section className=" py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className=" pt-8 pb-2 flex justify-between items-end">
        <h3 className="text-white text-2xl">{title}</h3>
        <div className="text-red-600 underline underline-offset-4">
          <Link href={url}>More...</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {movies.map((movie) => (
          <Link href={`/${type}/${movie.id}`} key={movie.id}>
            <div className="border-2 border-gray-600 rounded-md p-3">
              <div className="w-full relative aspect-[2/3]">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div
                className="flex gap-1 mt-4"
                aria-label={`Rating: ${movie.vote_average} out of 10`}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar
                    key={i}
                    size={20}
                    color={movie.vote_average / 2 >= i ? "#ff9900" : "gray"}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="py-4 text-white text-md">{movie.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
