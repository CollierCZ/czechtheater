import Fact from "./Fact";
import React from "react";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

import { internalLinksObject, sampleTallImageData, sampleWideImageData } from "../../utilities/sampleTestData";

const wideText = "This is a wide image"
const factWithWideImage = {
  elements: {
    description: {
      value: `<div>${wideText}</div>`,
    },
    image: {
      value: [sampleWideImageData],
    },
  },
};

const tallText = "This is a tall image"
const factWithTallImage = {
  elements: {
    description: {
      value: `<div>${tallText}</div>`,
    },
    image: {
      value: [sampleTallImageData],
    },
  },
};

const noImageText = "This is text with no image"
const factsNoImage = {
  elements: {
    description: {
      value: `<div>${noImageText}</div>`
    },
    image: {
      value: [],
    },
  },
};


let factWithInternalLink = JSON.parse(JSON.stringify(factsNoImage));
factWithInternalLink.elements.description.value = internalLinksObject.internalLinkValue
factWithInternalLink.elements.description.links = internalLinksObject.internalLinkLinks

describe("Fact", () => {
  it("renders correctly with a tall image", () => {
    render(<Fact fact={factWithTallImage} />);
    expect(screen.getByTestId("fact-image")).toHaveAttribute("data-src", expect.stringMatching(sampleTallImageData.url));
  });
  it("renders correctly with a wide image", () => {
    render(<Fact fact={factWithWideImage} />);
    expect(screen.getByTestId("fact-image")).toHaveAttribute("data-src", expect.stringMatching(sampleWideImageData.url));
  });
  it("renders correctly without an image", () => {
    render(<Fact fact={factsNoImage} />);
    expect(screen.getByTestId("fact")).toHaveTextContent(noImageText)
  });
  it("renders correctly with a link to a show", () => {
    render(<Fact fact={factWithInternalLink} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", `/${internalLinksObject.internalLinkLinks[0].url_slug}`)
  });
});
