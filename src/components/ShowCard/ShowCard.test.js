import React from "react";
import ShowCard from "./ShowCard";
import { sampleImage } from "../../utilities/sampleTestData";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

const propsArray = {
  name: "Alquist's revenge",
  description: "All the acting",
  showImage: sampleImage,
  imageDescription: "A cool image",
  slug: "alquists-revenge"
};

const ticketLink = "https://example.com";

describe("ShowCard", () => {
  it("loads correctly without a ticket link", () => {
    render(<ShowCard {...propsArray} />);
    expect(screen.queryByTestId("ticket-link")).not.toBeInTheDocument()
  });
  it("loads correctly with a ticket link without future", () => {
    render(<ShowCard {...propsArray} ticketLink={ticketLink} />);
    expect(screen.queryByTestId("ticket-link")).not.toBeInTheDocument()
  });
  it("loads correctly with a ticket link and in the future", () => {
    render(<ShowCard {...propsArray} ticketLink={ticketLink} time="future" />);
    expect(screen.queryByTestId("ticket-link")).toBeInTheDocument()
  });
});
