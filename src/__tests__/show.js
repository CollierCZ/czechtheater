import React from "react";
import { sampleShow } from "../utilities/sampleShow";
import { shallow } from "enzyme";
import Show from "../templates/show";

let sampleShowNoGallery = JSON.parse(JSON.stringify(sampleShow))
sampleShowNoGallery.elements.gallery.assets = []

const showToLoad = {}
showToLoad['kenticoCloudItemShow'] = sampleShow

const showToLoadNoGallery = {}
showToLoadNoGallery['kenticoCloudItemShow'] = sampleShowNoGallery

describe("A show", () => {
    it("loads correctly with a gallery", () => {
      const component = shallow (<Show data={showToLoad} />)
      expect(component).toMatchSnapshot()
    })
    it("loads correctly with no gallery", () => {
      const component = shallow (<Show data={showToLoadNoGallery} />)
      expect(component).toMatchSnapshot()
    })
})