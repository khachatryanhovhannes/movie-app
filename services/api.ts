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

    return res.data.genres;
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
