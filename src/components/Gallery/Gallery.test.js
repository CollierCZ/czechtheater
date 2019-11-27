import Gallery from "./Gallery";
import { mount } from "enzyme";
import React from "react";
import { simpleShallowRender } from "../../utilities/testHelpers";

const images = [
  {
    description: "The theater logo (image 1)",
    url: "https://assets-us-01.kc-usercontent.com:443/fb599585-baec-0077-1624-981d3321fff0/4e43fc7c-ce8d-49fd-aba9-bdf908330220/logo.jpg"
  },
  {
    description: "RUR banner (image 2)",
    url: "https://assets-us-01.kc-usercontent.com/fb599585-baec-0077-1624-981d3321fff0/dac0a3fd-0216-4fd9-ba04-05e561b0b0cc/RUR.jpg?w=1200&fit=crop"
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
  it("closes correcly", () => {
    openLightbox('.ril__closeButton')
  })
})