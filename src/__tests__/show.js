import React from "react";
import { sampleShowForPage, sampleShowForPageNoGallery, sampleShowForPageNoTicketLink } from "../utilities/sampleTestData";
import Show from "../templates/show";
import { simpleShallowRender } from "../utilities/testHelpers"

const showToLoad = {}
showToLoad['kontentItemShow'] = sampleShowForPage

const showToLoadNoGallery = {}
showToLoadNoGallery['kontentItemShow'] = sampleShowForPageNoGallery

const showToLoadNoTickets = {}
showToLoadNoTickets['kontentItemShow'] = sampleShowForPageNoTicketLink

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