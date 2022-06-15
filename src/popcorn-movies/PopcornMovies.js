import { LitElement, html, nothing } from "lit-element";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";

import { styles } from "./PopcornMovies.styles.js";

export class PopcornMovies extends ScopedElementsMixin(LitElement) {

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
      myMovies: { type: Array },
    };
  }

  constructor() {
    super();
    this.myMovies = [];
  }

  removeMovie(movie) {
    this.dispatchEvent(new CustomEvent("remove-movie", { detail: movie }));
  }

  render() {
    return html`
      <ul>
      ${this.myMovies.map(
          (movie) => html`
            <li data-testid="movieElement" class="movieElement" key=${movie.imdbID}>
            <label>
            <input type="checkbox" />
            </label>
              <img src=${movie.poster} />
              <p class="movieTitle">${movie.title}</p>
              <lion-button-submit @click=${() => this.removeMovie(movie)} class="removeMovie">Remove</lion-button-submit>
            </li>
          `
        )}
      </ul>
    `;
  }
}
