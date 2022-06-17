import { html } from '@lion/core';

import { PopcornFooter } from '../PopcornFooter.js';

if (!customElements.get('popcorn-footer')) {
    customElements.define('popcorn-footer', PopcornFooter);
}

export default {
    title: 'PopcornFooter',
};

export const FooterStory = () => html `<popcorn-footer></popcorn-footer>`;