import React from "react";
import ShowCard from "./ShowCard";
import { simpleShallowRender } from "../../utilities/testHelpers"

const propsArray = {
  name: "Alquist's revenge",
  description: "All the acting",
  imageUrl: "https://example.com",
  imageDescription: "A cool image",
  slug: "alquists-revenge",
}

const ticketLink = "https://example.com"

describe("ShowCard", () => {
  it("loads correctly for future shows", () => {
    simpleShallowRender(<ShowCard {...propsArray} time="future" />)
  })
  it("loads correctly for past shows", () => {
    simpleShallowRender(<ShowCard {...propsArray} time="past" />)
  })
  it("loads correctly with a ticket link", () => {
    simpleShallowRender(<ShowCard {...propsArray} ticketLink={ticketLink} time="future" />)
  })
})