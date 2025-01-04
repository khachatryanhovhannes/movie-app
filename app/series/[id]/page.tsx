import SmallButton from "@/components/small_button";
import { IGenre, ISerie, ISinglePageSeries } from "@/models";
import { getSeriesRecommendations, getSingleSeries } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import { BsStar } from "react-icons/bs";
import { MdCalendarMonth, MdLanguage } from "react-icons/md";

interface ISingleSeriesPageProps {
  params: {
    id: string;
  };
}

export default async function SingleSeries({ params }: ISingleSeriesPageProps) {
  const { id } = await params;

  const movie: ISinglePageSeries = await getSingleSeries(Number(id));
  const recommendations: ISerie[] = await getSeriesRecommendations(Number(id));

  return (
    <main className="py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
      <div>
        <h1 className="text-3xl font-bold text-center">{movie.name}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4">
          <div className="col-span-2 lg:col-span-1 w-full relative  aspect-[2/3]">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.name}
              fill
              objectFit="cover"
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
                  href={`/series?genre=${genre.id}`}
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
                <span className="font-bold">First Air Date:</span>{" "}
                {movie.first_air_date}
              </div>
       
              <div>
                <span className="font-bold">Production Companies:</span>{" "}
                {movie.production_companies.map((pc) => pc.name).join(", ")}
              </div>
              <div>
                <span className="font-bold">Seasons:</span>{" "}
                {movie.seasons.length}
              </div>
              <div>
                <span className="font-bold">Homepage:</span>{" "}
                <Link href={movie.homepage} target="_blank">
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
            <div
              key={movie.id}
              className="text-white flex gap-3 p-3 border-2 border-gray-600 rounded-md"
            >
              <div className="w-1/3 relative aspect-[2/3]">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.name}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h4>{movie.name}</h4>
                  <p className="flex items-center gap-1">
                    <MdCalendarMonth />
                    {movie.first_air_date}
                  </p>
                  <p className="flex items-center gap-1">
                    <MdLanguage /> {movie.original_language}
                  </p>
                </div>
                <div className="text-red-600 underline underline-offset-4">
                  <Link href={`/series/${movie.id}`}>More...</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
