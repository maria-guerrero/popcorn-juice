import { LitElement, html } from "lit-element" // "../../node_modules/lit-element/index.js";
import { styles } from "./PopcornApp.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { callToApi } from "../services/api.js";
import { PopcornMovies } from "../popcorn-movies/PopcornMovies.js";
import { PopcornHeader } from "../popcorn-header/PopcornHeader.js";
import { PopcornMain } from "../popcorn-main/PopcornMain.js";
import { PopcornFooter } from "../popcorn-footer/PopcornFooter.js";

export class PopcornApp extends ScopedElementsMixin(LitElement) {

  static get scopedElements() {
    return {
      "popcorn-movies": PopcornMovies,
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

  // To push the movies
   connectedCallback() {
     super.connectedCallback();
     const element = await callToApi();
     this.movies.push(element);
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
