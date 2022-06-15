import { LitElement, html, nothing } from "lit-element";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";
import { localize, LocalizeMixin } from "@lion/localize";

const LOCALE_KEY = "popcorn-header";

import { styles } from "./PopcornListMovies.styles.js";

export class PopcornListMovies extends LocalizeMixin(ScopedElementsMixin(LitElement)) {
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
    this.dispatchEvent(
      new CustomEvent("on-click-movie", { detail: movie })
    );
  }

  render() {
    if (!this.movies) {
      return nothing;
    }
  }

  render() {
    return html`
      <ul>
        ${this.movies.map(
          (movie) => html`
            <li
              data-testid="movieElement"
              class="movieElement"
              data-key=${movie.id}
            >
              <img
                alt=${localize.msg("popcorn-list-movies:pictureOf")} ${movie.title}
                src=${movie.poster === "N/A"
                  ? "https://ih1.redbubble.net/image.512138487.5983/fposter,small,wall_texture,product,750x1000.u3.jpg"
                  : movie.poster}
              />
              <p class="movieTitle">${movie.title}</p>
              <lion-button-submit @click=${() => this.onClickAddMovie(movie)} class="addButton">Add</lion-button-submit>
            </li>
          `
        )}
      </ul>
    `;
  }
}
