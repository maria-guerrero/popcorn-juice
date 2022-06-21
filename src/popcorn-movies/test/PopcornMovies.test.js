import { localize } from "@lion/localize";
import { expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import { PopcornMovies } from "../PopcornMovies.js";

const scopedElements = { "popcorn-movies": PopcornMovies };
const scopedFixture = (template) => fixture(template, { scopedElements });

const myMovies = [
  {
    title: "Batman Begins",
    id: "tt0372784",
    poster: "/.web-test-runner/assets/img/batman.jpg",
  },
  {
    title: "Batman v Superman: Dawn of Justice",
    id: "tt2975590",
    poster: "/.web-test-runner/assets/img/uniquePoster.jpg",
  },
];

describe("PopcornMovies", () => {
  xit("should be accessible", async () => {
    const element = await scopedFixture(
      html`<popcorn-movies .myMovies=${myMovies}></popcorn-movies>`
    );
    await expect(element).to.be.accessible();
  });

  xit("should dispatch event remove-button when remove button is clicked", async () => {
    const element = await scopedFixture(
      html`<popcorn-movies .myMovies=${myMovies}></popcorn-movies>`
    );

    const removeMovieButtons =
      element.shadowRoot.querySelectorAll(".removeMovie");
    await waitUntil(() => removeMovieButtons && removeMovieButtons.length > 0);
    setTimeout(() => {
      removeMovieButtons[0].click();
    });

    const { detail } = await oneEvent(element, "remove-movie");

    expect(detail).to.deep.equal(myMovies[0]);
  });

  xit("should show a message when there are no movies saved", async () => {
    const element = await scopedFixture(
      html`<popcorn-movies></popcorn-movies>`
    );

    const noMoviesMessage =
      element.shadowRoot.querySelector(".noMoviesMessage");

    expect(noMoviesMessage).to.exist;
  });

  it("should return nothing when there are no movies saved", async () => {
    const element = await scopedFixture(
      html`<popcorn-movies></popcorn-movies>`
    );

      const popcornMovies = element.shadowRoot.querySelector('[data-testid="popcorn-movies"]');

      expect(popcornMovies).to.be.null;
  });
});
