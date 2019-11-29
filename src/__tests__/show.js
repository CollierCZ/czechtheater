import React from "react";
import { sampleShow, sampleShowNoGallery, sampleShowNoTicketLink } from "../utilities/sampleTestData";
import Show from "../templates/show";
import { simpleShallowRender } from "../utilities/testHelpers"

const showToLoad = {}
showToLoad['kontentItemShow'] = sampleShow

const showToLoadNoGallery = {}
showToLoadNoGallery['kontentItemShow'] = sampleShowNoGallery

const showToLoadNoTickets = {}
showToLoadNoTickets['kontentItemShow'] = sampleShowNoTicketLink

describe("A show", () => {
    it("loads correctly with a gallery", () => {
      simpleShallowRender(<Show data={showToLoad} />)
    })
    it("loads correctly with no gallery", () => {
      simpleShallowRender(<Show data={showToLoadNoGallery} />)
    })
    it("loads correctly with no tickets", () => {
      simpleShallowRender(<Show data={showToLoadNoTickets} />)
    })
})