import React from "react";
import Header from "./Header";

import { sampleImage } from "../../utilities/sampleTestData";
import { simpleShallowRender } from "../../utilities/testHelpers"

describe("Header", () => {
  it("loads correctly", () => {
    simpleShallowRender(<Header image={sampleImage} siteTitle="Czech Theater" />)
  })
})