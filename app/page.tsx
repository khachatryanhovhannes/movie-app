import { HomeHero } from "@/components";
import { IGenre, IMovie } from "@/models";
import { getGenres, getPopular } from "@/services/api";

export default async function Home() {
  const movies: IMovie[] = await getPopular();
  const genres: IGenre[] = await getGenres();

  return (
    <main className="bg-white">
      <HomeHero movies={movies} genres={genres} />
      
    </main>
  );
}
