import { LitElement, html, nothing } from "lit-element";
import { styles } from "./PopcornFooter.styles.js";

export class PopcornFooter extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    const author = "María";
    return html`
      <footer class="footer">
        <p>Made with 🖤 by &copy;${author}</p>
      </footer>
    `;
  }
}
