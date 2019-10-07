import { basicInfoQuery } from "../utilities/sampleTestData" 
import React from "react";
import { shallow } from "enzyme";
import { PureLayout as Layout } from "./layout";

describe("Layout", () => {
    it("loads correctly", () => {
      const component = shallow (<Layout data={basicInfoQuery}><p>A test</p></Layout>)
      expect(component).toMatchSnapshot()
    })
})