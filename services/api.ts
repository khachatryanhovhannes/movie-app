import instance from ".";

export const getPopular = async () => {
  try {
    const res = await instance.get("movie/popular?language=en-US&page=1");

    return res.data.results;
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
