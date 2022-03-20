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
    expect(document.querySelector(".ReactModalPortal")).toBeInTheDocument()
  })
  it("correctly opens lightbox on keypress", () => {
    render(<Gallery images={images} />)
    fireEvent.keyPress(screen.getByAltText(images[0].description), {key: "Enter", charCode: 13})
    expect(document.querySelector(".ReactModalPortal")).toBeInTheDocument()
  })
})

describe("Lightbox", () => {
  it("moves to the next image correcly", () => {
    openLightbox()
    fireEvent.click(screen.getByTitle("Next image"))
    fireEvent.load(screen.getByLabelText("Lightbox"))
  })
  it("moves to the previous image correcly", () => {
    openLightbox()
    fireEvent.click(screen.getByTitle("Previous image"))
    fireEvent.load(document.querySelector(".ril-image-current"))
  })
  it("closes correcly", () => {
    openLightbox()
    fireEvent.click(screen.getByTitle("Close lightbox"))
  })
})