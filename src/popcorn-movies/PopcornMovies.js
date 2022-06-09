import { LitElement, html } from "lit-element";
import { styles } from "./PopcornMovies.styles.js";

export class PopcornMovies extends LitElement {
    
    static get styles() {
        return styles;
    }

    render() {
        return html `
            <p>My movies page</p>
        `;
    }
}