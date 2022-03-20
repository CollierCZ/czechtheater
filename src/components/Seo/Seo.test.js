import { basicInfoQuery } from "../../utilities/sampleTestData" 
import Seo from "./Seo"
import React from "react"
import { render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

const renderSEO = (property,value) => {
  if (property) {
    const props = { [property]: value}
    render(<Seo {...props} />)
  }
  else {
    render(<Seo />)
  }
}

describe("SEO", () => {
  it("renders correctly with no additional props", async () => {
    renderSEO()
    await waitFor(() => {
        expect(document.title).toEqual(basicInfoQuery.kontentItemBasicInfo.elements.name.value)
    })
  })
  it("renders correctly with description", async () => {
    const descr = "An awesome play"
    renderSEO("description", descr)
    await waitFor(() => {
        expect(document.head.getElementsByTagName('meta')['description']).toHaveAttribute("content", descr)
    })
  })
  it("renders correctly with image", async () => {
    const imageUrl = "https://assets-us-01.kc-usercontent.com/fb599585-baec-0077-1624-981d3321fff0/2ad1a0d2-3809-4eb6-9024-d782425209f0/Poster.jpg"
    renderSEO("image", imageUrl)
    await waitFor(() => {
        expect(document.head.querySelector("meta[property='og:image']")).toHaveAttribute("content", imageUrl)
    })
  })
  it("renders correctly with title", async () => {
    const title = "Alquist's Revenge"
    renderSEO("title", title)
    await waitFor(() => {
        expect(document.title).toEqual(`${title} | ${basicInfoQuery.kontentItemBasicInfo.elements.name.value}`)
    })
  })
  it("renders correctly with keywords", async () => {
    const keywords = ["test","test2"]
    renderSEO("keywords", keywords)
    await waitFor(() => {
      expect(document.head.getElementsByTagName('meta')['keywords']).toHaveAttribute("content", keywords.join(`, `))
    })
  })
  it("renders correctly without keywords", async () => {
    const keywords = []
    renderSEO("keywords", keywords)
    await waitFor(() => {
      expect(document.head.querySelector("meta[name='keywords']")).not.toBeInTheDocument()
    })
  })
})