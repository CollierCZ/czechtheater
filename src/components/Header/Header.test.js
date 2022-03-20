import React from "react";
import Header from "./Header";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import { sampleImage, sampleImageNoDescription } from "../../utilities/sampleTestData";

describe("Header", () => {
  it("loads correctly", () => {
    render(<Header image={sampleImage} siteTitle="Czech Theater" />)
    expect(screen.getByText("Czech Theater")).toBeInTheDocument()
  })
  it("loads correctly with no description", () => {
    render(<Header image={sampleImageNoDescription} siteTitle="Czech Theater" />)
    expect(screen.getByText("Czech Theater")).toBeInTheDocument()
  })
})