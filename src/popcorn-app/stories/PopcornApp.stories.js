import { html } from '@lion/core';

import { PopcornApp } from '../PopcornApp.js';

if (!customElements.get('popcorn-app')) {
    customElements.define('popcorn-app', PopcornApp);
}

export default {
    title: 'PopcornApp',
};

export const AppStory = () => html `<popcorn-app></popcorn-app>`;