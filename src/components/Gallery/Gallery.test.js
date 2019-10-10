import Gallery from "./Gallery";
import { mount } from "enzyme";
import React from "react";
import { simpleShallowRender } from "../../utilities/testHelpers";

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
    simpleShallowRender(<Gallery images={images} />)
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