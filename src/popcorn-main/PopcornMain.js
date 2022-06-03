import { LitElement, html } from "lit-element";
import { styles } from "./PopcornMain.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { callToApi } from "../services/api.js";

export class PopcornMain extends ScopedElementsMixin(LitElement) {

  static get scopedElements() {
    return {
      "popcorn-movies": PopcornMovies,
    };
  }

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
    console.log(this.movies);
    return html`
      <main>
        <section>
          <popcorn-movies .movies=${this.movies}></popcorn-movies>
        </section>
      </main>
    `;
  }
}
