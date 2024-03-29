import { localize } from "@lion/localize";
import { expect, fixture, html, oneEvent, waitUntil } from "@open-wc/testing";
import { PopcornListMovies } from "../PopcornListMovies.js";

const scopedElements = { "popcorn-list-movies": PopcornListMovies };
const scopedFixture = (template) => fixture(template, { scopedElements });

const movies = [
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
  {
    title: "Spiderman",
    id: "tt0100669",
    poster: "N/A",
  },
  {
    title: "Italian Spiderman",
    id: "tt2705436",
  },
];

describe("PopcornListMovies", () => {
  it("should be accessible", async () => {
    const element = await scopedFixture(
      html`<popcorn-list-movies .movies=${movies}></popcorn-list-movies>`
    );
    await expect(element).to.be.accessible();
  });

  it("should dispatch event on-click-movie when add button is clicked", async () => {
    const element = await scopedFixture(
      html`<popcorn-list-movies .movies=${movies}></popcorn-list-movies>`
    );

    const addMovieButtons = element.shadowRoot.querySelectorAll(".addButton");
    await waitUntil(() => addMovieButtons[0]);
    setTimeout(() => {
      addMovieButtons[0].click();
    });
    const { detail } = await oneEvent(element, "on-click-movie");

    expect(detail).to.be.deep.equal(movies[0]);
  });

  it("should return nothing when there are no movies in the homepage", async () => {
    const element = await scopedFixture(
      html`<popcorn-list-movies></popcorn-list-movies>`
    );

    const popcornListMovies = element.shadowRoot.querySelector(
      '[data-testid="popcorn-list-movies"]'
    );

    expect(popcornListMovies).to.be.null;
  });

  it("should return a placeholder when the provided poster is invalid", async () => {
    const element = await scopedFixture(
      html`<popcorn-list-movies .movies=${movies}></popcorn-list-movies>`
    );

    const movieImages = element.shadowRoot.querySelectorAll('[data-testid="movieImage"]');

    expect(movieImages[2].src).to.be.equal("http://localhost:8000/assets/img/placeholder.jpg");
    expect(movieImages[3].src).to.be.equal("http://localhost:8000/assets/img/placeholder.jpg");
  });

  it("should return the movie image when the provided poster is valid", async () => {
    const element = await scopedFixture(
      html`<popcorn-list-movies .movies=${movies}></popcorn-list-movies>`
    );

    const movieImages = element.shadowRoot.querySelectorAll('[data-testid="movieImage"]');
    console.log(movieImages[0].src);

    expect(movieImages[0].src).to.be.equal('http://localhost:8000/.web-test-runner/assets/img/batman.jpg');
  });
});
