import React from "react";
import { shallow } from "enzyme";
import Fact from "./Fact";

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
    const component = shallow (<Fact facts={factsWithImage} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly without an image", () => {
    const component = shallow (<Fact facts={factsNoImage} />)
    expect(component).toMatchSnapshot()
  })
})