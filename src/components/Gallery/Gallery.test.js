import React from "react";
import { mount, shallow } from "enzyme";
import Gallery from "./Gallery";

const images = [
  {
    description: "A description",
    url: "https://example.com/1"
  },
  {
    description: "A description",
    url: "https://example.com/2"
  },
]

const openLightbox = (wrapper) => {
  const imageNodes = wrapper.find('img')
  const image = imageNodes.at(0)
  image.simulate('click')
}

describe("Gallery", () => {
  it("renders correctly ", () => {
    const component = shallow (<Gallery images={images} />)
    expect(component).toMatchSnapshot()
  })
  it("correctly opens lightbox", () => {
    const component = mount (<Gallery images={images} />)
    openLightbox(component)
    expect(component).toMatchSnapshot()
    component.unmount()
  })
})

describe("Lightbox", () => {
  it("moves to the next image correcly", () => {
    const component = mount (<Gallery images={images} />)
    openLightbox(component)
    component.find('.ril__navButtonNext').simulate('click')
    expect(component).toMatchSnapshot()
  })
  it("moves to the previous image correcly", () => {
    const component = mount (<Gallery images={images} />)
    openLightbox(component)
    component.find('.ril__navButtonPrev').simulate('click')
    expect(component).toMatchSnapshot()
  })
})