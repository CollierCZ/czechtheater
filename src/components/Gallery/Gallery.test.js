import Gallery from "./Gallery";
import React from "react";
import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

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

const openLightbox = () => {
  render(<Gallery images={images} />)
  fireEvent.click(screen.getByAltText(images[0].description))
}

describe("Gallery", () => {
  it("renders correctly ", () => {
    render(<Gallery images={images} />)
    expect(screen.getByTestId("gallery")).toBeInTheDocument()
  })
  it("correctly opens lightbox on click", () => {
    openLightbox()
    expect(document.querySelector(".yarl__portal_open")).toBeInTheDocument()
  })
  it("correctly opens lightbox on keypress", () => {
    render(<Gallery images={images} />)
    fireEvent.keyPress(screen.getByAltText(images[0].description), {key: "Enter", charCode: 13})
    expect(document.querySelector(".yarl__portal_open")).toBeInTheDocument()
  })
})

describe("Lightbox", () => {
  it("moves to the next image correcly", () => {
    openLightbox()
    fireEvent.click(screen.getByLabelText("Next"))
    expect(document.querySelector(".yarl__slide_current img")).toHaveAttribute('src',images[1].url)
  })
  it("moves to the previous image correcly", () => {
    openLightbox()
    fireEvent.click(screen.getByLabelText("Previous"))
    expect(document.querySelector(".yarl__slide_current img")).toHaveAttribute('src',images[1].url)
  })
  it("closes correcly", () => {
    openLightbox()
    fireEvent.click(screen.getByLabelText("Close"))
    expect(document.querySelector(".yarl__portal_open")).not.toBeInTheDocument()
  })
})