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

describe("ShowCard", () => {
  it("loads correctly for future shows", () => {
    const component = shallow (<ShowCard {...propsArray} time="future" />)
    expect(component).toMatchSnapshot()
  })
  it("loads correctly for past shows", () => {
    const component = shallow (<ShowCard {...propsArray} time="past" />)
    expect(component).toMatchSnapshot()
  })
})