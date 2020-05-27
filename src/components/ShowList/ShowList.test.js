import React from "react";
import { sampleShow, sampleShowNoTicketLink } from "../../utilities/sampleTestData";
import ShowList from "./ShowList";
import { simpleShallowRender } from "../../utilities/testHelpers";

const shows = {value:[sampleShow]};
const showsNoTicketLink = {value:[sampleShowNoTicketLink]};


describe("ShowList", () => {
  it("loads correctly for future shows", () => {
    simpleShallowRender(<ShowList shows={shows} future="true" />)
  })
  it("loads correctly for past shows", () => {
    simpleShallowRender(<ShowList shows={shows} />)
  })
  it("loads correctly for past shows with no ticket link", () => {
    simpleShallowRender(<ShowList shows={showsNoTicketLink} />)
  })
});