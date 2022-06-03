import { LitElement, html } from "lit-element" // "../../node_modules/lit-element/index.js";
import { styles } from "./PopcornApp.styles.js";
import { callToApi } from "../services/api.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { PopcornMovies } from "../popcorn-movies/PopcornMovies.js";
import { PopcornHeader } from "../popcorn-header/PopcornHeader.js";
import { PopcornMain } from "../popcorn-main/PopcornMain.js";
import { PopcornFooter } from "../popcorn-footer/PopcornFooter.js";

export class PopcornApp extends ScopedElementsMixin(LitElement) {

  connectedCallback() {
    super.connectedCallback();
    callToApi().then((movie) => {
      this.movies.push(movie);
    });
  }

  static get scopedElements() {
    return {
      "popcorn-header": PopcornHeader,
      "popcorn-main": PopcornMain,
      "popcorn-footer": PopcornFooter,
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

  renderHeader() {
    return html`
      <popcorn-header></popcorn-header>
    `;
  }

  renderMain() {
    return html`
      <popcorn-main></popcorn-main>
    `;
  }

  renderFooter() {
      return html `
        <popcorn-footer></popcorn-footer>
      `;
  }

  render() {
    return html` ${this.renderHeader()} ${this.renderMain()} ${this.renderFooter()}; `;
  }
}
