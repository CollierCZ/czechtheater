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

const openLightbox = (nextClick) => {
  const component = mount (<Gallery images={images} />)
  const imageNodes = component.find('img')
  const image = imageNodes.at(0)
  image.simulate('click')
  if (nextClick) {
    component.find(nextClick).simulate('click')    
  }
  expect(component).toMatchSnapshot()
  component.unmount()
}

describe("Gallery", () => {
  it("renders correctly ", () => {
    const component = shallow (<Gallery images={images} />)
    expect(component).toMatchSnapshot()
  })
  it("correctly opens lightbox", () => {
    openLightbox()
  })
})

describe("Lightbox", () => {
  it("moves to the next image correcly", () => {
    openLightbox('.ril__navButtonNext')
  })
  it("moves to the previous image correcly", () => {
    openLightbox('.ril__navButtonPrev')
  })
})