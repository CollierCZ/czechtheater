import React from "react";
import { internalLinksObject, internalLinkText, sampleShowForPage, sampleShowForPageNoGallery, sampleShowForPageNoTicketLink, sampleShowForPageWithInternalLink } from "../utilities/sampleTestData";
import Show from "../templates/show";
import { cleanup, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

const showToLoad = {}
showToLoad['kontentItemShow'] = sampleShowForPage

const showToLoadNoGallery = {}
showToLoadNoGallery['kontentItemShow'] = sampleShowForPageNoGallery

const showToLoadNoTickets = {}
showToLoadNoTickets['kontentItemShow'] = sampleShowForPageNoTicketLink

const showToLoadWithInternalLink = {}
showToLoadWithInternalLink['kontentItemShow'] = sampleShowForPageWithInternalLink

describe("A show", () => {
    it("loads correctly with a gallery", () => {
      render(<Show data={showToLoad} />)
      expect(screen.queryByTestId("ticket-link")).toBeInTheDocument()
      expect(screen.queryByTestId("gallery")).toBeInTheDocument()
    })
    it("loads correctly with no gallery", () => {
      render(<Show data={showToLoadNoGallery} />)
      expect(screen.queryByTestId("ticket-link")).toBeInTheDocument()
      expect(screen.queryByTestId("gallery")).not.toBeInTheDocument()
    })
    it("loads correctly with no tickets", () => {
      render(<Show data={showToLoadNoTickets} />)
      expect(screen.queryByTestId("ticket-link")).not.toBeInTheDocument()
      expect(screen.queryByTestId("gallery")).toBeInTheDocument()
    })
    it("loads correctly with an internal link", () => {
      render(<Show data={showToLoadWithInternalLink} />)
      expect(screen.getByText(internalLinkText)).toHaveAttribute("href", `/${internalLinksObject.internalLinkLinks[0].url_slug}`)
    })
})