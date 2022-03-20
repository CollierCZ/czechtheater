import Layout from "./layout";
import React from "react";
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

describe("Layout", () => {
    it("loads correctly", () => {
      const testText = "A test"
      render(<Layout><h1>{testText}</h1></Layout>)
      expect(screen.getByRole("heading")).toHaveTextContent(testText)
    })
})