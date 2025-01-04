import { IGenre, IMoviePageResult } from "@/models";
import instance from ".";

export const getPopular = async () => {
  try {
    const res = await instance.get("movie/popular?language=en-US&page=1");

    return res.data.results.slice(0, 6);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch popular movies");
  }
};

export const getGenres = async () => {
  try {
    const res = await instance.get("genre/movie/list?language=en-US");

    return res.data.genres as IGenre[];
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch genres");
  }
};

export const getRecently = async () => {
  try {
    const res = await instance.get("movie/upcoming?language=en-US&page=1");
    return res.data.results.slice(0, 4);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch genres");
  }
};

export const getTopRated = async () => {
  try {
    const res = await instance.get("movie/top_rated?language=en-US&page=1");
    return res.data.results.slice(0, 4);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch genres");
  }
};

export const getPopularSeries = async () => {
  try {
    const res = await instance.get("tv/popular?language=en-US&page=1");
    return res.data.results.slice(0, 4);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch genres");
  }
};

export const getTopRatedSeries = async () => {
  try {
    const res = await instance.get("tv/top_rated?language=en-US&page=1");
    return res.data.results.slice(0, 4);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch genres");
  }
};

export const moviesPageGet = async ({
  distinctive,
  page = 1,
  genre,
}: {
  distinctive?: string;
  page?: number;
  genre?: number;
}) => {
  try {
    const endpoint = genre ? "discover/movie" : `movie/${distinctive}`;
    const query = new URLSearchParams({
      language: "en-US",
      page: page.toString(),
    });

    if (genre) query.append("with_genres", genre.toString());

    const res = await instance.get(`${endpoint}?${query.toString()}`);
    return res.data as IMoviePageResult;
  } catch (err) {
    console.error("Failed to fetch movies:", err);
    return {
      total_pages: 0,
      results: [],
    };
  }
};

export const getSingleMovie = async (id: number) => {
  try {
    const res = await instance.get(`movie/${id}?language=en-US`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch movie:", err);
    throw new Error("Failed to fetch movie");
  }
};

export const getRecommendations = async (id: number) => {
  try {
    const res = await instance.get(
      `movie/${id}/recommendations?language=en-US`
    );
    return res.data.results.slice(0, 8);
  } catch (err) {
    console.error("Failed to fetch recommendations:", err);
    return [];
  }
};

export const getTvGenres = async () => {
  try {
    const res = await instance.get("genre/tv/list?language=en-US");

    return res.data.genres as IGenre[];
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch genres");
  }
};
