import { basicInfoQuery } from "../../utilities/sampleTestData" 
import React from "react"
import { shallow } from "enzyme"
import { PureSEO as SEO } from "./seo"

const renderSEO = (property,value) => {
  if (property) {
    const props = { [property]: value}
    const component = shallow (<SEO data={basicInfoQuery} {...props} />)
    expect(component).toMatchSnapshot()
  }
  else {
    const component = shallow (<SEO data={basicInfoQuery} />)
    expect(component).toMatchSnapshot()
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