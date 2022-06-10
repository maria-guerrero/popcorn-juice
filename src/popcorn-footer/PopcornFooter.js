import { LitElement, html, nothing } from "lit-element";
import { localize, LocalizeMixin } from '@lion/localize';

import { styles } from "./PopcornFooter.styles.js";

const LOCALE_KEY = "popcorn-footer";

export class PopcornFooter extends LocalizeMixin(LitElement) {
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

  render() {
    return html`
      <footer>
        <p>${localize.msg("popcorn-footer:made")} &copy;María Guerrero</p>
      </footer>
    `;
  }
}
