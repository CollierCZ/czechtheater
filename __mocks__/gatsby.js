const React = require("react")
const gatsby = jest.requireActual("gatsby")
import { basicInfoQuery } from "../src/utilities/sampleTestData"
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn().mockImplementation(() => null),
  useStaticQuery: jest.fn().mockImplementation(() => basicInfoQuery),
}