import { LitElement, html } from "lit-element";
import { styles } from "./PopcornMovies.styles.js";

export class PopcornMovies extends LitElement {

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
    return html`
      <ul>
        <li></li>
      </ul>
    `;
  }
}
