import { localize } from "@lion/localize";
import {
  expect,
  fixture,
  html,
  elementUpdated,
  oneEvent,
  waitUntil
} from "@open-wc/testing";
import { PopcornHeader } from "../PopcornHeader.js";

const scopedElements = { "popcorn-header": PopcornHeader };
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
];

describe("PopcornHeader", () => {
  xit("should be accessible", async () => {
    const element = await scopedFixture(
      html`<popcorn-header></popcorn-header>`
    );
    await expect(element).to.be.accessible();
  });

  // to review
  it("should get the value correctly when the user search a movie", async () => {
    const element = await scopedFixture(
      html`<popcorn-header></popcorn-header>`
    );

    element.inputValue = "Guardians of the galaxy";
    await elementUpdated(element);

    const searchButton = element.shadowRoot.querySelector(
      '[data-testid="input"]'
    );
    searchButton.click();

    expect(element.inputValue).to.be.equal("Guardians of the galaxy");
  });

  xit("should dispatch event input-search when the user press search button", async () => {
    const element = await scopedFixture(
      html`<popcorn-header></popcorn-header>`
    );

    const searchMovieButton = element.shadowRoot.querySelector(".search");
    const inputHeader = element.shadowRoot.querySelector('[data-testid="input"]');
    inputHeader.modelValue = 'Batman';

    await waitUntil(() => searchMovieButton);
    setTimeout(() => {
      searchMovieButton.click();
    });
    const { detail } = await oneEvent(element, "input-search");

    expect(detail).to.be.equal('Batman');
  });
});
