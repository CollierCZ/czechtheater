import React from "react";
import { shallow } from "enzyme";
import SocialMediaIcons from "./SocialMediaIcons";

describe("SocialMediaIcons", () => {
  it("loads correctly", () => {
    const component = shallow (<SocialMediaIcons urls={["https://www.facebook.com/czechtheater/"]} />)
    expect(component).toMatchSnapshot()
  })
})