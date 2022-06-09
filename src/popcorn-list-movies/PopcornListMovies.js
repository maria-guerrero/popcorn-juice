import { LitElement, html, nothing } from "lit-element";
import { styles } from "./PopcornListMovies.styles.js";

export class PopcornListMovies extends LitElement {
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
    console.log(this.movies);
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
