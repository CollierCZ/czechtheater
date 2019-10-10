import React from "react";
import Header from "./Header";
import { simpleShallowRender } from "../../utilities/testHelpers"

describe("Header", () => {
  it("loads correctly", () => {
    simpleShallowRender(<Header />)
  })
})