"use client";
import { IGenre, IMovie } from "@/models";
import { Carousel } from "@material-tailwind/react";
import BigButton from "../big_button";
import { init_genres } from "../../utils/init_genres";
import SmallButton from "../small_button";
import { BsCalendarDayFill, BsStar } from "react-icons/bs";
import Link from "next/link";

interface IHomeHeroProps {
  movies: IMovie[];
  genres: IGenre[];
}

export default function HomeHero({ movies, genres }: IHomeHeroProps) {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 1 }}
      className="w-full"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
              role="button"
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    >
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="w-full h-[70vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
          aria-label={`Movie backdrop for ${movie.original_title}`}
        >
          <div className="w-full h-full bg-black bg-opacity-40 flex flex-col justify-end pb-5">
            <div className="text-white py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
              <div className="flex items-center flex-col sm:flex-row gap-3 justify-center pb-5">
                <Link href={`/movies/${movie.id}`} passHref>
                  <BigButton text="Watch Now" icon={null} bgColor="red" />
                </Link>
                <Link href={`/movies/${movie.id}`} passHref>
                  <BigButton
                    text="Watch Later"
                    icon={null}
                    bgColor="transparent"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl md:text-4xl font-bold text-center sm:text-left">
                  {movie.original_title}
                </h4>
                <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start">
                  {init_genres(movie, genres).map((genre) => (
                    <SmallButton
                      text={genre.name}
                      color="black"
                      bgColor="white"
                      key={genre.id}
                      href={`movies?genre=${genre.id}`}
                      ariaLabel={`Browse movies in ${genre.name} genre`}
                    />
                  ))}
                  <span className="flex items-center gap-2 text-sm md:text-base">
                    <BsCalendarDayFill />
                    {movie.release_date.substring(0, 4)}
                  </span>
                  <span className="flex items-center gap-2 text-sm md:text-base">
                    <BsStar color="white" fill="white" />
                    {movie.vote_average}
                  </span>
                </div>
                <p className="w-full lg:w-3/4 xl:w-1/2 text-sm md:text-base text-center sm:text-left overflow-hidden">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
