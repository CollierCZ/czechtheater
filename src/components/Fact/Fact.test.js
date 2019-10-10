import Fact from "./Fact";
import React from "react";
import { simpleShallowRender } from "../../utilities/testHelpers"
import { shallow } from "enzyme";

const factsWithImage = {
  edges: [{
    node: {
      elements: {
        description: {
          resolvedHtml: "<div>Testing inner HTML</div>"
        },
        image: {
          value:[{
            url: "https://example.com"
          }]
        }
      }
    }
  }]
}

const factsNoImage = {
  edges: [{
    node: {
      elements: {
        description: {
          resolvedHtml: "<div>Testing inner HTML</div>"
        },
        image: {
          value:[]
        }
      }
    }
  }]
}

describe("Fact", () => {
  it("renders correctly with an image", () => {
    simpleShallowRender(<Fact facts={factsWithImage} />)
  })
  it("renders correctly without an image", () => {
    simpleShallowRender(<Fact facts={factsNoImage} />)
  })
})