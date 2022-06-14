import { LitElement, html, nothing } from "lit-element";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";

import { styles } from "./PopcornListMovies.styles.js";

export class PopcornListMovies extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return styles;
  }

  static get scopedElements() {
    return {
      "lion-button-submit": LionButtonSubmit,
    };
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

  onClickAddMovie(movie) {
    this.dispatchEvent(
      new CustomEvent("on-click-movie", { detail: movie })
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
              data-key=${movie.imdbID}
            >
              <img
                alt="Foto de ${movie.title}"
                src=${movie.poster === "N/A"
                  ? "https://ih1.redbubble.net/image.512138487.5983/fposter,small,wall_texture,product,750x1000.u3.jpg"
                  : movie.poster}
              />
              <p class="movieTitle">${movie.title}</p>
              <lion-button-submit @click=${() => this.onClickAddMovie(movie)} class="addButton">Add</lion-button-submit>
            </li>
          `
        )}
      </ul>
    `;
  }
}
