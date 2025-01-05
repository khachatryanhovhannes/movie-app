import { ISerie } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface ISeriesCardProps {
  movie: ISerie;
}

export default function SeriesCard({ movie }: ISeriesCardProps) {
  return (
    <Link
      href={`/series/${movie.id}`}
      aria-label={`View details of ${movie.name} series`}
    >
      <div className="border-2 border-gray-600 rounded-md p-3" tabIndex={0}>
        <div className="w-full relative aspect-[2/3]">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`Poster of ${movie.name}`}
            fill
            objectFit="cover"
            quality={80}
            sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
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
        <div className="py-4 text-white text-md">{movie.name}</div>
      </div>
    </Link>
  );
}
