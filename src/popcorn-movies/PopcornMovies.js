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

  render() {
    console.log(this.movies);
    return html`
      <ul>
        ${this.movies.map(
          (movie) => html`
            <li>
              <p>${movie.Title}</p>
            </li>
            <p>hello world</p>
          `
        )}
      </ul>
    `;
  }
}
