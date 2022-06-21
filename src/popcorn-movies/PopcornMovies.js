import { LitElement, html, nothing } from "@lion/core";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { localize, LocalizeMixin } from "@lion/localize";

import { styles } from "./PopcornMovies.styles.js";

const LOCALE_KEY = "popcorn-movies";

export class PopcornMovies extends LocalizeMixin(
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
      myMovies: { type: Array },
    };
  }

  constructor() {
    super();
    this.myMovies = [];
  }

  removeMovie(movie) {
    this.dispatchEvent(new CustomEvent("remove-movie", { detail: movie }));
  }

  renderNoMoviesMessage() {
    return html`
      <div>
        <h3 class="noMoviesMessage">
          ${localize.msg(`${LOCALE_KEY}:noMoviesSaved`)}
        </h3>
      </div>
    `;
  }

  isMyMoviesValid() {
    if (!this.myMovies) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    if (!this.isMyMoviesValid()) {
      return nothing;
    } else if (this.myMovies.length === 0) {
      return this.renderNoMoviesMessage();
    }

    return html`
      <ul data-testid="popcorn-movies">
        ${this.myMovies.map(
          (movie) => html`
            <li data-testid="movieElement" class="movieElement" key=${movie.id}>
              <label
                >Hello
                <input type="checkbox" />
              </label>
              <img src=${movie.poster} />
              <p class="movieTitle">${movie.title}</p>
              <lion-button-submit
                @click=${() => this.removeMovie(movie)}
                class="removeMovie"
                >Remove</lion-button-submit
              >
            </li>
          `
        )}
      </ul>
    `;
  }
}
