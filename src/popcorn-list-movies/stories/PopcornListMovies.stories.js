import { html } from "lit-element";

import { PopcornListMovies } from "../PopcornListMovies.js";

if (!customElements.get('popcorn-list-movies')) {
  customElements.define('popcorn-list-movies', PopcornListMovies);
}

const moviesArray = [
  {
    "title": "Batman Begins",
    "id": "tt0372784",
    "poster": "/.web-test-runner/assets/img/batman.jpg"
    },
    // {
    // "Title": "Batman v Superman: Dawn of Justice",
    // "Year": "2016",
    // "imdbID": "tt2975590",
    // "Type": "movie",
    // "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    // },
    // {
    // "Title": "The Batman",
    // "Year": "2022",
    // "imdbID": "tt1877830",
    // "Type": "movie",
    // "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
    // }
]

export default {
  title: "PopcornListMovies",
};

export const ListMoviesStory = () =>
  html`<popcorn-list-movies .movies=${moviesArray}></popcorn-list-movies>`;