import React from "react";
import { shallow } from "enzyme";
import ShowCard from "./ShowCard";

const propsArray = {
  name: "Alquist's revenge",
  description: "All the acting",
  imageUrl: "https://example.com",
  imageDescription: "A cool image",
  slug: "alquists-revenge",
  ticketLink: "https://example.com"
}

const renderShowCard = (time) => {
  const component = shallow (<ShowCard {...propsArray} time={time} />)
  expect(component).toMatchSnapshot()
}

describe("ShowCard", () => {
  it("loads correctly for future shows", () => {
    renderShowCard(future)
  })
  it("loads correctly for past shows", () => {
    renderShowCard(past)
  })
})