import { basicInfoQuery } from "../../utilities/sampleTestData" 
import React from "react"
import { shallow } from "enzyme"
import { PureSEO as SEO } from "./seo"

describe("SEO", () => {
  it("renders correctly with no additional props", () => {
    const component = shallow (<SEO data={basicInfoQuery} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with description", () => {
    const component = shallow (<SEO  data={basicInfoQuery} description="An awesome play" />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with image", () => {
    const component = shallow (<SEO  data={basicInfoQuery} image="https://assets-us-01.kc-usercontent.com/fb599585-baec-0077-1624-981d3321fff0/2ad1a0d2-3809-4eb6-9024-d782425209f0/Poster.jpg" />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with title", () => {
    const component = shallow (<SEO  data={basicInfoQuery} title="Alquist's Revenge" />)
    expect(component).toMatchSnapshot()
  })
})