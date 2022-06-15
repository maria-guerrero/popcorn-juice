import { LitElement, html } from "lit-element";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { router } from "lit-element-router";

import { styles } from "./PopcornApp.styles.js";
import { callToApi } from "../services/api.js";
import { PopcornHeader } from "../popcorn-header/PopcornHeader.js";
import { PopcornMain } from "../popcorn-main/PopcornMain.js";
import { PopcornListMovies } from "../popcorn-list-movies/PopcornListMovies.js";
import { PopcornFooter } from "../popcorn-footer/PopcornFooter.js";
import { PopcornAbout } from "../popcorn-about/PopcornAbout.js";
import { PopcornMovies } from "../popcorn-movies/PopcornMovies.js";
import { Link } from "../app-link/Link.js";

export class PopcornApp extends router(ScopedElementsMixin(LitElement)) {
  static get scopedElements() {
    return {
      "popcorn-header": PopcornHeader,
      "popcorn-main": PopcornMain,
      "popcorn-footer": PopcornFooter,
      "app-link": Link,
      "popcorn-list-movies": PopcornListMovies,
      "popcorn-about": PopcornAbout,
      "popcorn-movies": PopcornMovies,
    };
  }

  static get styles() {
    return styles;
  }

  static get routes() {
    return [
      {
        name: "my-movies",
        pattern: "my-movies",
      },
      {
        name: "about",
        pattern: "about",
      },
      {
        name: "homepage",
        pattern: "*",
      },
    ];
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  onClickSearch(e) {
    callToApi(e.detail).then((movie) => {
      this.movies = movie;
    });
  }

  onClickAddMovie(e) {
    let foundMyMovie;
    for(const myMovie of this.myMovies) {
      if(myMovie.id === e.detail.id) {
        foundMyMovie = myMovie;
      }
    }

    if(foundMyMovie === undefined) {

      let foundMovie;
      for(const movie of this.movies) {
        if(movie.id === e.detail.id) {
          foundMovie = movie;
        }
      }

      this.myMovies = [...this.myMovies, e.detail];
    }
  }

  removeMovie(movieSelected) {
    this.myMovies = this.myMovies.filter((myMovie) => myMovie !== movieSelected.detail);
  }

  static get properties() {
    return {
      movies: { type: Array },
      myMovies: { type: Array },
      inputValue: { type: String },
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
    };
  }

  constructor() {
    super();
    this.movies = [];
    this.myMovies = [];
    this.inputValue = "";
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};
  }

  renderHtml() {
    return html`
      <popcorn-header @input-search=${this.onClickSearch}></popcorn-header>

      <popcorn-main .activeRoute=${this.route}>
        <popcorn-list-movies
          @on-click-movie=${this.onClickAddMovie}
          route="homepage"
          .movies=${this.movies}
        ></popcorn-list-movies>
        <popcorn-about route="about"></popcorn-about>
        <popcorn-movies
          @remove-movie=${this.removeMovie}
          .myMovies=${this.myMovies}
          route="my-movies"
        ></popcorn-movies>
      </popcorn-main>

      <popcorn-footer></popcorn-footer>
    `;
  }

  render() {
    return html` ${this.renderHtml()} `;
  }
}
