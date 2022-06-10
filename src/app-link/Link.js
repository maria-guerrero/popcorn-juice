import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";

import { styles } from "./Link.styles.js"

export class Link extends navigator(LitElement) {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.href = "";
  }

  onClickLink(event) {
    event.preventDefault();
    this.navigate(this.href);
  }

  render() {
    return html`
      <a class="linkApp" href=${this.href} @click=${this.onClickLink}>
        <slot></slot>
      </a>
    `;
  }
}
