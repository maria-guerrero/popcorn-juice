export const callToApi = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=49081783&i=tt3896198"
    );
    const dataMovies = await response.json();
    
    return dataMovies;
  } catch (error) {
    return null;
  }
};
