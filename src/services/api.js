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

// async function callToApi () {
//     const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=49081783');
//     const movies = await response.json()

//     .then(data => {
//         const cleanData = data.map((movie) => {
//             return {
//                 poster: movie.poster,
//                 title: movie.title,
//                 imdbRating: movie.imdbRating
//             }
//         });
//         return cleanData;
//     })
// }

// export default callToApi;
