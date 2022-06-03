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

  render() {
    if (!this.movies) {
      return nothing;
    }
  }

  constructor() {
    super();
    this.movies = [];
  }

  render() {
      console.log(this.movies);
    return html`
      <ul>
        ${this.movies.map(
          (movie) => html`
            <li>
              <img src=${movie.Poster}>
              <p>${movie.Title}</p>
              <p>${movie.imdbRating}</p>
            </li>
          `
        )}
      </ul>
    `;
  }
}
