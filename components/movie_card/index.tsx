import { IMovie } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface IMovieCardProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: IMovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "/images/placeholder.png"; // Fallback image in case of missing poster

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="border-2 border-gray-600 rounded-md p-3">
        <div className="w-full relative aspect-[2/3]">
          <Image
            src={posterUrl}
            alt={`Poster for ${movie.title}`}
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
        <div className="py-4 text-white text-md" aria-label={movie.title}>
          {movie.title}
        </div>
      </div>
    </Link>
  );
}
