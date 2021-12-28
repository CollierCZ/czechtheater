import Fact from "./Fact";
import React from "react";
import { mount } from "enzyme";

import { sampleTallImageData, sampleWideImageData } from "../../utilities/sampleTestData";
import { simpleShallowRender } from "../../utilities/testHelpers";

const factWithWideImage = {
  elements: {
    description: {
      value: "<div>Testing inner HTML</div>",
    },
    image: {
      value: [sampleWideImageData],
    },
  },
};

const factWithTallImage = {
  elements: {
    description: {
      value: "<div>Testing inner HTML</div>",
    },
    image: {
      value: [sampleTallImageData],
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
  it("renders correctly with a tall image", () => {
    const wrapper = mount(<Fact fact={factWithTallImage} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly with a wide image", () => {
    const wrapper = mount(<Fact fact={factWithWideImage} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly without an image", () => {
    simpleShallowRender(<Fact fact={factsNoImage} />);
  });
});
