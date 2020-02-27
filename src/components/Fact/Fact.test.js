import Fact from "./Fact";
import React from "react";
import { sampleKenticoFixedData } from "../../utilities/sampleTestData"
import { simpleShallowRender } from "../../utilities/testHelpers"

const factsWithImage = {
  edges: [{
    node: {
      elements: {
        description: {
          resolvedData: {
            html: "<div>Testing inner HTML</div>"
          }
        },
        image: {
          value:[{
            fixed: sampleKenticoFixedData
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
          resolvedData: {
            html: "<div>Testing inner HTML</div>"
          }
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