import { LitElement, html } from "lit-element";
import { localize, LocalizeMixin } from '@lion/localize';

import { styles } from "./PopcornAbout.styles.js";

const LOCALE_KEY = "popcorn-about";

export class PopcornAbout extends LocalizeMixin(LitElement) {
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

    render() {
        return html `
            <section class="about">
                <h3 class="welcomeText">${localize.msg("popcorn-about:welcomeText")}</h3> 
                <p>${localize.msg("popcorn-about:popcornAbout")}</p>
                <h3 class="footerPopcornTitle">Popcorn juice</h3>
            </section>
        `;
    }
}