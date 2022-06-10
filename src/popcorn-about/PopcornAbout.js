import { LitElement, html } from "lit-element";

import { styles } from "./PopcornAbout.styles.js";

export class PopcornAbout extends LitElement {
    static get styles() {
        return styles;
    }

    render() {
        return html `
            <p>About page</p>
        `;
    }
}