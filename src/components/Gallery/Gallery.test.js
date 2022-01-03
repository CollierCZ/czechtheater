import Gallery from "./Gallery";
import { mount } from "enzyme";
import React from "react";
import { simpleShallowRender } from "../../utilities/testHelpers";

const images = [
  {
    description: "The theater logo (image 1)",
    url: "https://link-to/first-image.png"
  },
  {
    description: "RUR banner (image 2)",
    url: "https://link-to/second-image.png"
  },
]

const openLightbox = (nextClick,event) => {
  const component = mount(<Gallery images={images} />)
  const imageNodes = component.find('img')
  const image = imageNodes.at(0)
  if (event === 'keypress') {
    image.simulate('keypress', {key: 'Enter'})
  }
  else {
    image.simulate('click')
  }
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
  it("correctly opens lightbox on click", () => {
    openLightbox()
  })
  it("correctly opens lightbox on keypress", () => {
    openLightbox(false,'keypress')
  })
})

describe("Lightbox", () => {
  it("moves to the next image correcly", () => {
    openLightbox('.ril__navButtonNext')
  })
  it("moves to the previous image correcly", () => {
    openLightbox('.ril__navButtonPrev')
  })
  it("closes correcly", () => {
    openLightbox('.ril__closeButton')
  })
})