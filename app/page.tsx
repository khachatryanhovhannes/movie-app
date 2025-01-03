import { HomeHero, HomeLatest } from "@/components";
import HomeSections from "@/components/home_sections";
import { IGenre, IMovie } from "@/models";
import { getGenres, getPopular, getTopRated } from "@/services/api";

export default async function Home() {
  const movies: IMovie[] = await getPopular();
  const genres: IGenre[] = await getGenres();
  const topRated: IMovie[] = await getTopRated();

  return (
    <main>
      <HomeHero movies={movies} genres={genres} />
      <HomeLatest />
      <HomeSections movies={topRated} title="Top Rated" url="" />
    </main>
  );
}
