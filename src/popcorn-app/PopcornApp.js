import { LitElement, html } from "lit-element"; // "../../node_modules/lit-element/index.js";
import { styles } from "./PopcornApp.styles.js";
import { callToApi } from "../services/api.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { PopcornHeader } from "../popcorn-header/PopcornHeader.js";
import { PopcornMain } from "../popcorn-main/PopcornMain.js";
import { PopcornFooter } from "../popcorn-footer/PopcornFooter.js";
// import { Router } from "@vaadin/router";

// window.addEventListener('load', () => { (1)
//   initRouter();
// });

// const outlet = document.getElementById("outlet");
// const router = new Router(outlet);
// router.setRoutes([
//   { path: "/", component: "Homepage" },
//   { path: "/my-movies", component: "Mymovies" },
//   { path: "/about", component: "About" },
//   { path: "(.*)", component: "notFound" },
// ]);

export class PopcornApp extends ScopedElementsMixin(LitElement) {

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
      inputValue: { type: String },
    };
  }

  constructor() {
    super();
    this.movies = [];
    this.inputValue = '';
  }

  renderHtml() {
    return html`
      <popcorn-header @input-search=${this.onClickSearch}></popcorn-header>
      <popcorn-main .movies=${this.movies}></popcorn-main>
      <popcorn-footer></popcorn-footer>
    `;
  }

  render() {
    return html` ${this.renderHtml()} `;
  }

  onClickSearch(e) {
    callToApi(e.detail).then((movie) => {
      this.movies = movie;
    });
  }
}
