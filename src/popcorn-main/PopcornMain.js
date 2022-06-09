import { LitElement, html } from "lit-element";
import { outlet } from "lit-element-router";

export class PopcornMain extends outlet(LitElement) {

  render() {
    return html`
      <main>
        <slot></slot>
      </main>
    `;
  }
}
