import React from "react";
import { shallow } from "enzyme";
import SocialMediaIcons from "./SocialMediaIcons";

describe("SocialMediaIcons", () => {
  it("loads correctly with URL", () => {
    const component = shallow (<SocialMediaIcons urls={["https://www.facebook.com/czechtheater/"]} />)
    expect(component).toMatchSnapshot()
  })
  it("loads correctly when empty", () => {
    const component = shallow (<SocialMediaIcons />)
    expect(component).toMatchSnapshot()
  })
})