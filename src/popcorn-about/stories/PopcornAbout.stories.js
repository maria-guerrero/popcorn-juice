import { html } from '@lion/core';

import { PopcornAbout } from '../PopcornAbout.js';
window.customElements.define('popcorn-about', PopcornAbout);

export default {
    title: 'PopcornAbout',
};

export const AboutStory = () => html `<popcorn-about></popcorn-about>`;