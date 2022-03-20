import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

describe("SocialMediaIcons", () => {
  it("loads correctly with URL", () => {
    const mediaLink = "https://www.facebook.com/czechtheater/"
    render(<SocialMediaIcons urls={[mediaLink]} />)
    expect(screen.getByRole("link")).toHaveAttribute("href", mediaLink)
  })
  it("loads nothing when empty", () => {
    render(<SocialMediaIcons />)
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })
})