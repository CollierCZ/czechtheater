import React from "react";
import { sampleShow } from "../../utilities/sampleShow";
import { shallow } from "enzyme";
import ShowList from "./ShowList";

const shows = [sampleShow];

describe("ShowList", () => {
  it("loads correctly for future shows", () => {
    const component = shallow (<ShowList shows={shows} future="true" />)
    expect(component).toMatchSnapshot()
  })
  it("loads correctly for past shows", () => {
    const component = shallow (<ShowList shows={shows} />)
    expect(component).toMatchSnapshot()
  })
});