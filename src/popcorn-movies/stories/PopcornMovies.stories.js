import { html } from "lit-element";

import { PopcornMovies } from "../PopcornMovies.js";
window.customElements.define("popcorn-movies", PopcornMovies);

export default {
  title: "PopcornMovies",
};

export const MoviesStory = () =>
  html`<popcorn-movies></popcorn-movies>`;