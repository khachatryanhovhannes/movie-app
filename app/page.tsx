import { HomeHero, HomeLatest } from "@/components";
import HomeSections from "@/components/home_sections";
import { IGenre, IMovie, ISerie } from "@/models";
import {
  getGenres,
  getPopular,
  getPopularSeries,
  getTopRated,
} from "@/services/api";

export default async function Home() {
  const movies: IMovie[] = await getPopular();
  const genres: IGenre[] = await getGenres();
  const topRated: IMovie[] = await getTopRated();
  const popularSeries: ISerie[] = await getPopularSeries();

  return (
    <main>
      <HomeHero movies={movies} genres={genres} />
      <HomeLatest />
      <HomeSections
        movies={topRated}
        title="Top Rated Movies"
        url="/movies"
        type="movies"
      />
      <HomeSections
        movies={movies.slice(0, 4)}
        title="Popular Movies"
        url="/movies"
        type="movies"
      />
      <HomeSections
        series={popularSeries}
        title="Popular Series"
        url="/series"
        type="series"
      />
    </main>
  );
}
