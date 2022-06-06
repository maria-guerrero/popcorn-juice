import { html } from 'lit-element';

import { PopcornMain } from '../PopcornMain.js';
window.customElements.define('popcorn-main', PopcornMain);

export default {
    title: 'PopcornMain',
};

export const MainStory = () => html `<popcorn-main></popcorn-main>`;