import { HomeHero, HomeLatest } from "@/components";
import HomeSections from "@/components/home_sections";
import { IGenre, IMovie, ISerie } from "@/models";
import {
  getGenres,
  getPopular,
  getPopularSeries,
  getTopRated,
  getTopRatedSeries,
} from "@/services/api";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const movies = await getPopular();

  return {
    title: "G-Movies | Watch the Best Movies and Series",
    description: `Explore the best movies, including "${movies[0]?.title}" and many more!`,
    openGraph: {
      title: "G-Movies | Watch the Best Movies and Series",
      description: `Find top-rated movies and series. Don't miss out on the latest hits!`,
      url: "https://g-movies-app.netlify.app/",
      images: [
        {
          url: "/images/hero.jpg",
          width: 1920,
          height: 1080,
          alt: "Hero image showcasing movies and series",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "G-Movies | Watch the Best Movies and Series",
      description: `Watch the latest movies and TV series. Find out more on G-Movies!`,
      images: ["/images/hero.jpg"],
    },
  };
}

export default async function Home() {
  const movies: IMovie[] = await getPopular();
  const genres: IGenre[] = await getGenres();
  const topRated: IMovie[] = await getTopRated();
  const popularSeries: ISerie[] = await getPopularSeries();
  const topRatedSeries: ISerie[] = await getTopRatedSeries();

  return (
    <main>
      <HomeHero movies={movies} genres={genres} />
      <HomeLatest />
      <HomeSections
        movies={topRated}
        title="Top Rated Movies"
        url="/movies?distinctive=top_rated"
        type="movies"
      />
      <HomeSections
        movies={movies.slice(0, 4)}
        title="Popular Movies"
        url="/movies?distinctive=popular"
        type="movies"
      />
      <HomeSections
        series={topRatedSeries}
        title="Top Rated Series"
        url="/series"
        type="series"
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
