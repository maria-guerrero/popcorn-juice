import { LitElement, html, nothing } from "lit-element";

import { styles } from "./PopcornMovies.styles.js";

export class PopcornMovies extends LitElement {

  static get styles() {
    return styles;
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
            </li>
          `
        )}
      </ul>
    `;
  }
}
