export const callToApi = async (inputValue) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${inputValue}&apikey=49081783`
    );
    const data = await response.json();
    const dataMovies = data.Search;

    const mapDataMovies = (data) => {
      return data.map((movie) => ({
        Title: movie.Title,
        Poster: movie.Poster,
        imdbID: movie.imdbID,
      }));
    };

    const movies = mapDataMovies(dataMovies);
    return movies;

  } catch (error) {
    return null;
  }
};
