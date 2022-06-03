export const callToApi = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=49081783&i=tt3896198"
    );  
    const movie = await response.json();
    console.log(movie);
    return movie;
  } catch (error) {
      return null;
  }
};
