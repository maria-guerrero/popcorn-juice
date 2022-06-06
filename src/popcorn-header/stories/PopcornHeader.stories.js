import { html } from 'lit-element';

import { PopcornHeader } from '../PopcornHeader.js';
window.customElements.define('popcorn-header', PopcornHeader);

export default {
    title: 'PopcornHeader',
};

export const HeaderStory = () => html `<popcorn-header></popcorn-header>`;