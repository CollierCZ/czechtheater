import React from "react";
import { sampleShow, sampleShowNoGallery, sampleShowNoTicketLink } from "../../utilities/sampleTestData";
import { shallow } from "enzyme";
import ShowList from "./ShowList";

const shows = [sampleShow];
const showsNoGallery = [sampleShowNoGallery];
const showsNoTicketLink = [sampleShowNoTicketLink];


describe("ShowList", () => {
  it("loads correctly for future shows", () => {
    const component = shallow (<ShowList shows={shows} future="true" />)
    expect(component).toMatchSnapshot()
  })
  it("loads correctly for past shows", () => {
    const component = shallow (<ShowList shows={shows} />)
    expect(component).toMatchSnapshot()
  })
  it("loads correctly for past shows with no gallery", () => {
    const component = shallow (<ShowList shows={showsNoGallery} />)
    expect(component).toMatchSnapshot()
  })
  it("loads correctly for past shows with no ticket link", () => {
    const component = shallow (<ShowList shows={showsNoTicketLink} />)
    expect(component).toMatchSnapshot()
  })
});