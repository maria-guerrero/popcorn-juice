import { html } from '@lion/core';

import { PopcornMovies } from '../PopcornMovies.js';

if (!customElements.get('popcorn-movies')) {
    customElements.define('popcorn-movies', PopcornMovies);
}

export default {
    title: 'PopcornMovies',
};

export const MyMoviesStory = () => html `<popcorn-movies></popcorn-movies>`;