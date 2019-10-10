import React from "react";
import { sampleShow, sampleShowNoGallery } from "../utilities/sampleTestData";
import Show from "../templates/show";
import { simpleShallowRender } from "../utilities/testHelpers"

const showToLoad = {}
showToLoad['kenticoCloudItemShow'] = sampleShow

const showToLoadNoGallery = {}
showToLoadNoGallery['kenticoCloudItemShow'] = sampleShowNoGallery

describe("A show", () => {
    it("loads correctly with a gallery", () => {
      simpleShallowRender(<Show data={showToLoad} />)
    })
    it("loads correctly with no gallery", () => {
      simpleShallowRender(<Show data={showToLoadNoGallery} />)
    })
})