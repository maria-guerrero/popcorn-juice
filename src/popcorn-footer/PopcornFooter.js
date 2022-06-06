import { LitElement, html, nothing } from "lit-element";
import { styles } from "./PopcornFooter.styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";

export class PopcornFooter extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return styles;
  }

  render() {
    const author = "María";
    return html`
      <footer>
        <p>Made with 🖤 by &copy;${author}</p>
      </footer>
    `;
  }
}
