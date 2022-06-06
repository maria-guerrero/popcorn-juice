import { html } from 'lit-element';

import { PopcornFooter } from '../PopcornFooter.js';
window.customElements.define('popcorn-footer', PopcornFooter);

export default {
    title: 'PopcornFooter',
};

export const FooterStory = () => html `<popcorn-footer></popcorn-footer>`;