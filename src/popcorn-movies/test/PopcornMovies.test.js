import { expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import { PopcornMovies } from "../PopcornMovies.js";

const scopedElements = { "popcorn-movies": PopcornMovies };
const scopedFixture = (template) => fixture(template, { scopedElements });

const myMovies = [
  {
    "title": "Batman Begins",
    "id": "tt0372784",
    "poster": "/.web-test-runner/assets/batman.jpg"
    },
    {
    "title": "Batman v Superman: Dawn of Justice",
    "id": "tt2975590",
    "poster": "/.web-test-runner/assets/uniquePoster.jpg"
    },
]

describe("PopcornMovies", () => {

  xit("should be accessible", async () => {
    const element = await scopedFixture(
      html `<popcorn-movies .myMovies=${myMovies}></popcorn-movies>`
    );
    await expect(element).to.be.accessible();
  });

  xit("should remove a movie when the user click on 'remove' button", async () => {
    const element = await scopedFixture(
      html `<popcorn-movies .myMovies=${myMovies}></popcorn-movies>`
    );

    const removeMovieButtons = element.shadowRoot.querySelectorAll('.removeMovie');
    await waitUntil(() => removeMovieButtons && removeMovieButtons.length > 0);
    setTimeout(() => {
      removeMovieButtons[0].click();
    });

    const { detail } = await oneEvent(element, 'remove-movie');

    expect(detail).to.deep.equal(myMovies[0]);
  });

   /* it("should show a message when there are no movies saved", async () => {
    const element = await scopedFixture(
      html `<popcorn-movies .myMovies=${myMovies}></popcorn-movies>`
    );

    element.myMovies = [];

    const noMoviesMessage = element.shadowRoot.querySelector('.noMoviesMessage');
    console.log(noMoviesMessage);

    expect(element.myMovies.length).to.be.equal(noMoviesMessage);
  }) */
});