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

  onClickMovie() {
    this.dispatchEvent(new CustomEvent("movie-element", { detail: this }))
  }

  onClickMovie(item) {
    this.dispatchEvent(new CustomEvent("on-click-movie", { detail: item.currentTarget }));
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
            <li @click=${this.onClickMovie} data-testid="movieElement" class="movieElement" key=${movie.imdbID}>
              <img src=${movie.Poster} />
              <p class="movieTitle">${movie.Title}</p>
            </li>
          `
        )}
      </ul>
    `;
  }
}
