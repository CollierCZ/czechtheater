import Fact from "./Fact";
import React from "react";
import { sampleConstrainedGatsbyImageData } from "../../utilities/sampleTestData";
import { simpleShallowRender } from "../../utilities/testHelpers";

const factsWithImage = {
  elements: {
    description: {
      value: "<div>Testing inner HTML</div>",
    },
    image: {
      value: [sampleConstrainedGatsbyImageData],
    },
  },
};

const factsNoImage = {
  elements: {
    description: {
      value: "<div>Testing inner HTML</div>",
    },
    image: {
      value: [],
    },
  },
};

describe("Fact", () => {
  it("renders correctly with an image", () => {
    simpleShallowRender(<Fact fact={factsWithImage} />);
  });
  it("renders correctly without an image", () => {
    simpleShallowRender(<Fact fact={factsNoImage} />);
  });
});
