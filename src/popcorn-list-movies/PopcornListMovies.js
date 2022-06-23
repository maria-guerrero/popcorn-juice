import { LitElement, html, nothing } from "@lion/core";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";
import { localize, LocalizeMixin } from "@lion/localize";

const LOCALE_KEY = "popcorn-list-movies";

import { styles } from "./PopcornListMovies.styles.js";

export class PopcornListMovies extends LocalizeMixin(
  ScopedElementsMixin(LitElement)
) {
  static get styles() {
    return styles;
  }

  static get localizeNamespaces() {
    return [
      {
        [LOCALE_KEY]: (locale) => {
          const namespaces = {
            "en-GB": () => import("./translations/en-GB.js"),
            "es-ES": () => import("./translations/es-ES.js"),
          };
          return (namespaces[locale] || namespaces["en-GB"])();
        },
      },
      ...super.localizeNamespaces,
    ];
  }

  static get scopedElements() {
    return {
      "lion-button-submit": LionButtonSubmit,
    };
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

  onClickAddMovie(movie) {
    this.dispatchEvent(new CustomEvent("on-click-movie", { detail: movie }));
  }

  renderStartSearchingText() {
    return html`
      <h3 class="startSearching">
        ${localize.msg(`${LOCALE_KEY}:startSearching`)}
      </h3>
    `;
  }

  isListMoviesValid() {
    if (!this.movies) {
      return false;
    } else {
      return true;
    }
  }

  isMovieImageValid(movie) {
    if(!movie.poster || movie.poster === "N/A") {
      return "/assets/img/placeholder.jpg";
    }

    return movie.poster;
  }

  render() {
    if (!this.isListMoviesValid()) {
      return nothing;
    } else if (this.movies.length === 0) {
      return this.renderStartSearchingText();
    }

    return html`
      <ul data-testid="popcorn-list-movies">
        ${this.movies.map(
          (movie) => html`
            <li
              data-testid="movieElement"
              class="movieElement"
              data-key=${movie.id}
            >
              <img
                data-testid="movieImage"
                alt=${`${localize.msg(`${LOCALE_KEY}:pictureOf`)} ${movie.title}`}
                src=${this.isMovieImageValid(movie)}
              />
              <p class="movieTitle">${movie.title}</p>
              <lion-button-submit
                @click=${() => this.onClickAddMovie(movie)}
                class="addButton"
                >Add</lion-button-submit
              >
            </li>
          `
        )}
      </ul>
    `;
  }
}
