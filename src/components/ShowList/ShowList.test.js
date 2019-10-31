import React from "react";
import { sampleShow, sampleShowNoGallery, sampleShowNoTicketLink } from "../../utilities/sampleTestData";
import ShowList from "./ShowList";
import { simpleShallowRender } from "../../utilities/testHelpers";

const shows = {linked_items:[sampleShow]};
const showsNoGallery = {linked_items:[sampleShowNoGallery]};
const showsNoTicketLink = {linked_items:[sampleShowNoTicketLink]};


describe("ShowList", () => {
  it("loads correctly for future shows", () => {
    simpleShallowRender(<ShowList shows={shows} future="true" />)
  })
  it("loads correctly for past shows", () => {
    simpleShallowRender(<ShowList shows={shows} />)
  })
  it("loads correctly for past shows with no gallery", () => {
    simpleShallowRender(<ShowList shows={showsNoGallery} />)
  })
  it("loads correctly for past shows with no ticket link", () => {
    simpleShallowRender(<ShowList shows={showsNoTicketLink} />)
  })
});