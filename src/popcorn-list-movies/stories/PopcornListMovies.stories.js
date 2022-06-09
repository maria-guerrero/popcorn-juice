import { html } from "lit-element";

import { PopcornListMovies } from "../PopcornListMovies.js";
window.customElements.define("popcorn-movies", PopcornMovies);

export default {
  title: "PopcornListMovies",
};

export const MoviesStory = () =>
  html`<popcorn-list-movies></popcorn-list-movies>`;