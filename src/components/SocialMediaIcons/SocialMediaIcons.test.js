import React from "react";
import { simpleShallowRender } from "../../utilities/testHelpers";
import SocialMediaIcons from "./SocialMediaIcons";

describe("SocialMediaIcons", () => {
  it("loads correctly with URL", () => {
    simpleShallowRender(<SocialMediaIcons urls={["https://www.facebook.com/czechtheater/"]} />)
  })
  it("loads correctly when empty", () => {
    simpleShallowRender(<SocialMediaIcons />)
  })
})