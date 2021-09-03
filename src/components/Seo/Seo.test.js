import { basicInfoQuery } from "../../utilities/sampleTestData" 
import { PureSeo as Seo } from "./Seo"
import React from "react"
import { simpleShallowRender } from "../../utilities/testHelpers"

const renderSEO = (property,value) => {
  if (property) {
    const props = { [property]: value}
    simpleShallowRender(<Seo data={basicInfoQuery} {...props} />)
  }
  else {
    simpleShallowRender(<Seo data={basicInfoQuery} />)
  }
}

describe("SEO", () => {
  it("renders correctly with no additional props", () => {
    renderSEO()
  })
  it("renders correctly with description", () => {
    renderSEO("description","An awesome play")
  })
  it("renders correctly with image", () => {
    renderSEO("image","https://assets-us-01.kc-usercontent.com/fb599585-baec-0077-1624-981d3321fff0/2ad1a0d2-3809-4eb6-9024-d782425209f0/Poster.jpg")
  })
  it("renders correctly with title", () => {
    renderSEO("title","Alquist's Revenge")
  })
})