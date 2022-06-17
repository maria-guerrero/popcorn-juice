import { html } from '@lion/core';

import { PopcornHeader } from '../PopcornHeader.js';

if (!customElements.get('popcorn-header')) {
    customElements.define('popcorn-header', PopcornHeader);
  }

export default {
    title: 'PopcornHeader',
};

export const HeaderStory = () => html `<popcorn-header></popcorn-header>`;