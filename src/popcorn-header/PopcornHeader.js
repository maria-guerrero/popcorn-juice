import { LitElement, html } from "lit-element";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";
import { localize, LocalizeMixin } from '@lion/localize';

import { Link } from "../app-link/Link.js";
import { styles } from "./PopcornHeader.styles.js";

const LOCALE_KEY = "popcorn-header";

export class PopcornHeader extends LocalizeMixin(ScopedElementsMixin(LitElement)) {
  static get styles() {
    return styles;
  }

  static get localizeNamespaces() {
    return [
      {
        [LOCALE_KEY]: (locale) => {
          const namespaces = {
            "en-GB": () => import ("./translations/en-GB.js"),
            "es-ES": () => import ("./translations/es-ES.js"),
          };
          return (namespaces[locale] || namespaces["en-GB"])();
        },
      },
      ...super.localizeNamespaces,
    ];
  }

  static get scopedElements() {
    return {
      "lion-button": LionButtonSubmit,
      "app-link": Link,
    };
  }

  static get properties() {
    return {
      inputValue: { type: String },
    };
  }

  constructor() {
    super();
    this.inputValue = "";
  }

  render() {
    return html`
      <header>
        <nav>
          <h1><app-link href="/homepage">${localize.msg("popcorn-header:title")}</app-link></h1>
          <ul class="appLinkUl">
            <app-link class="link" href="/my-movies">${localize.msg("popcorn-header:myMoviesPage")}</app-link>
            <app-link class="link" href="/about">${localize.msg("popcorn-header:aboutPage")}</app-link>
          </ul>
          <div>
            <label for="search">
              <input
                @input=${(e) => {
                  this.inputValue = e.target.value;
                }}
                data-testid="input"
                placeholder="Spiderman"
                type="text"
              />
            </label>
            <lion-button @click=${this.onClickSearch} class="search"
              >${localize.msg("popcorn-header:searchButton")}</lion-button
            >
          </div>
        </nav>
      </header>
    `;
  }

  onClickSearch(ev) {
    ev.preventDefault();

    this.dispatchEvent(
      new CustomEvent("input-search", { detail: this.inputValue })
    );
  }
}