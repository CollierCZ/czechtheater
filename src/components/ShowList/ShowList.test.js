import React from "react";
import { sampleShow, sampleShowNoTicketLink } from "../../utilities/sampleTestData";
import ShowList from "./ShowList";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

const shows = {value:[sampleShow]};
const showsNoTicketLink = {value:[sampleShowNoTicketLink]};


describe("ShowList", () => {
  it("loads correctly", () => {
    render(<ShowList shows={shows} />)
    expect(screen.queryByTestId("show-card")).toBeInTheDocument()
    expect(screen.queryByTestId("ticket-link")).not.toBeInTheDocument()
  })
  it("loads correctly for future shows with ticket link", () => {
    render(<ShowList shows={shows} future />)
    expect(screen.queryByTestId("ticket-link")).toBeInTheDocument()
  })
  it("loads correctly for future shows with no ticket link", () => {
    render(<ShowList shows={showsNoTicketLink} future />)
    expect(screen.queryByTestId("ticket-link")).not.toBeInTheDocument()
  })
});