export const callToApi = async (inputValue) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${inputValue}&apikey=49081783`
    );
    const data = await response.json();
    const dataMovies = data.Search;

    return dataMovies;
  } catch (error) {
    return null;
  }
};
