import { LitElement, html } from "@lion/core";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { LionButton, LionButtonReset, LionButtonSubmit } from "@lion/button";
import { LionInput } from "@lion/input";
import { LionForm } from "@lion/form";
import { localize, LocalizeMixin } from "@lion/localize";

import { Link } from "../app-link/Link.js";
import { styles } from "./PopcornHeader.styles.js";

const LOCALE_KEY = "popcorn-header";

export class PopcornHeader extends LocalizeMixin(
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
      "lion-input": LionInput,
      "lion-form": LionForm,
      "app-link": Link,
    };
  }

  onClickSearch(ev) {
    const formData = ev.target.serializedValue;

    this.dispatchEvent(
      new CustomEvent("input-search", { detail: formData.inputLion })
    );
  }

  render() {
    return html`
      <header>
        <nav>
          <h1>
            <app-link href="/homepage"
              >${localize.msg("popcorn-header:title")}</app-link
            >
          </h1>
          <article class="appLinkArticle">
            <app-link class="link" href="/my-movies"
              >${localize.msg(`${LOCALE_KEY}:myMoviesPage`)}</app-link
            >
            <app-link class="link" href="/about"
              >${localize.msg("popcorn-header:aboutPage")}</app-link
            >
          </article>
          <div>
            <lion-form @submit=${this.onClickSearch}>
              <form @submit=${(ev) => ev.preventDefault}>
                <label for="search">
                  <lion-input
                  label="search"
                    name="inputLion"
                    data-testid="input"
                    placeholder="Spiderman"
                    type="text"
                  ></lion-input>
                </label>
                <lion-button-submit class="search"
                  >${localize.msg(
                    "popcorn-header:searchButton"
                  )}</lion-button-submit
                >
              </form>
            </lion-form>
          </div>
        </nav>
      </header>
    `;
  }
}
