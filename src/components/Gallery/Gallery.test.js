import React from "react";
import { mount, shallow } from "enzyme";
import Gallery from "./Gallery";

const images = [
  {
    description: "A description",
    url: "https://example.com"
  }
]

describe("Gallery", () => {
  it("renders correctly ", () => {
    const component = shallow (<Gallery images={images} />)
    expect(component).toMatchSnapshot()
  })
  it("changes correctly to lightbox", () => {
    const component = mount (<Gallery images={images} />)
    component.find('img').simulate('click')
    expect(component).toMatchSnapshot()
    component.unmount()
  })
})