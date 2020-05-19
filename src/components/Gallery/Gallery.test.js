import Gallery from "./Gallery";
import { mount } from "enzyme";
import React from "react";
import { simpleShallowRender } from "../../utilities/testHelpers";

const images = [
  {
    description: "The theater logo (image 1)",
    fixed: {
      width: 100,
      height: 100,
      src: `test_image_1.jpg`,
      srcSet: `a_srcSet`,
    },
    fluid: {
      aspectRatio: 1.5,
      src: `test_image.jpg`,
      srcSet: `some srcSet`,
      sizes: `(max-width: 600px) 100vw, 600px`,
    }
  },
  {
    description: "RUR banner (image 2)",
    fixed: {
      width: 100,
      height: 100,
      src: `test_image_2.jpg`,
      srcSet: `a_second_srcSet`,
    },
    fluid: {
      aspectRatio: 1.5,
      src: `test_image_2.jpg`,
      srcSet: `a_second_srcSet`,
      sizes: `(max-width: 600px) 100vw, 600px`,
    }
  },
]

const openLightbox = (nextClick,event) => {
  const component = mount (<Gallery images={images} />)
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