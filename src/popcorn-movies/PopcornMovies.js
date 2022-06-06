import { LitElement, html, nothing } from "lit-element";
import { styles } from "./PopcornMovies.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";

export class PopcornMovies extends ScopedElementsMixin(LitElement) {

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      movies: { type: Array },
    };
  }

  constructor() {
    super();
    this.movies = [];
  }

  render() {
    if (!this.movies) {
      return nothing;
    }
  }

  render() {
    return html`
      <ul>
        ${this.movies.map(
          (movie) => html`
            <li class="movieElement" key=${movie.imdbID}>
              <img src=${movie.Poster} />
              <p class="movieTitle">${movie.Title}</p>
            </li>
          `
        )}
      </ul>
    `;
  }
}
