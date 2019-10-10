import { basicInfoQuery } from "../utilities/sampleTestData" 
import { PureLayout as Layout } from "./layout";
import React from "react";
import { simpleShallowRender } from "../utilities/testHelpers";

describe("Layout", () => {
    it("loads correctly", () => {
      simpleShallowRender(<Layout data={basicInfoQuery}><p>A test</p></Layout>)
    })
})