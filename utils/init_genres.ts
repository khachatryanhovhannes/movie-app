import { IGenre, IMovie } from "@/models";

export const init_genres = (movie: IMovie, genres: IGenre[]) => {
  return genres.filter((genre) => movie.genre_ids.includes(genre.id));
};
