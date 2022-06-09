import { LitElement, html } from "lit-element";
import { styles } from "./PopcornMain.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { PopcornListMovies } from "../popcorn-list-movies/PopcornListMovies.js";
import { outlet } from "lit-element-router";

export class PopcornMain extends outlet(ScopedElementsMixin(LitElement)) {

  static get scopedElements() {
    return {
      "popcorn-list-movies": PopcornListMovies,
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
    return html`
      <main>
        <section>
          <popcorn-list-movies .movies=${this.movies}></popcorn-list-movies>
        </section>
        <slot></slot>
      </main>
    `;
  }
}
