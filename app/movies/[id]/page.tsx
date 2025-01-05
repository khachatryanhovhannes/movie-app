import SmallButton from "@/components/small_button";
import { IGenre, IMovie, ISinglePageMovie } from "@/models";
import { getRecommendations, getSingleMovie } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { BsStar } from "react-icons/bs";
import { MdCalendarMonth, MdLanguage } from "react-icons/md";

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

interface IMoviePageProps {
  params: {
    id: string;
  };
}

export default async function Movie({ params }: IMoviePageProps) {
  const { id } = await params;

  const movie: ISinglePageMovie = await getSingleMovie(Number(id));
  const recommendations: IMovie[] = await getRecommendations(Number(id));
  return (
    <main className="py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
      <div>
        <h1 className="text-3xl font-bold text-center">{movie.title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4">
          <div className="col-span-2 lg:col-span-1 w-full relative aspect-[2/3]">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={`Poster of the movie ${movie.title}`}
              fill
              objectFit="cover"
              quality={80}
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
            />
          </div>
          <div className="col-span-2 lg:col-span-3 flex flex-col gap-4">
            <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start">
              {movie.genres.map((genre: IGenre) => (
                <SmallButton
                  text={genre.name}
                  color="black"
                  bgColor="white"
                  key={genre.id}
                  href={`/movies?genre=${genre.id}`}
                  aria-label={`Filter movies by ${genre.name} genre`}
                />
              ))}
              <span className="flex items-center gap-2 text-sm md:text-base">
                <BsStar color="white" fill="white" />
                {movie.vote_average} ({movie.vote_count} votes)
              </span>
            </div>
            <p className="text-lg">{movie.tagline}</p>
            <p>{movie.overview}</p>
            <div className="flex flex-col gap-2">
              <div>
                <span className="font-bold">Release Date:</span>{" "}
                {movie.release_date}
              </div>
              <div>
                <span className="font-bold">Runtime:</span> {movie.runtime}{" "}
                minutes
              </div>
              <div>
                <span className="font-bold">Production Companies:</span>{" "}
                {movie.production_companies.map((pc) => pc.name).join(", ")}
              </div>
              <div>
                <span className="font-bold">Revenue:</span> $
                {movie.revenue.toLocaleString()}
              </div>
              <div>
                <span className="font-bold">Homepage:</span>{" "}
                <Link
                  href={movie.homepage}
                  target="_blank"
                  aria-label={`Visit the movie's homepage`}
                >
                  {movie.homepage}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h3 className="text-white text-2xl py-3">Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {recommendations.map((movie) => (
            <article
              key={movie.id}
              className="text-white flex gap-3 p-3 border-2 border-gray-600 rounded-md"
            >
              <div className="w-1/3 relative aspect-[2/3]">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={`Poster of the movie ${movie.title}`}
                  fill
                  objectFit="cover"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
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
                  <Link
                    href={`/movies/${movie.id}`}
                    aria-label={`More about ${movie.title}`}
                  >
                    More...
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
