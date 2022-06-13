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

  onClickAddMovie(ev) {
    this.dispatchEvent(
      new CustomEvent("on-click-movie", { detail: ev.target })
    );
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
            <li
              data-testid="movieElement"
              class="movieElement"
              key=${movie.imdbID}
            >
              <img
                alt="Foto de ${movie.Title}"
                src=${movie.Poster === "N/A"
                  ? "https://ih1.redbubble.net/image.512138487.5983/fposter,small,wall_texture,product,750x1000.u3.jpg"
                  : movie.Poster}
              />
              <p class="movieTitle">${movie.Title}</p>
              <button @click=${this.onClickAddMovie} class="addButton">Add</button>
            </li>
          `
        )}
      </ul>
    `;
  }
}
