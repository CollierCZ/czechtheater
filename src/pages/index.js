import React from "react"
import { graphql } from "gatsby"

import Fact from "../components/Fact/Fact"
import Layout from "../layout/layout"
import ShowList from "../components/ShowList/ShowList"
import SEO from "../components/SEO/seo"
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons"



const IndexPage = ({data}) => {
  const info = data.kontentItemBasicInfo.elements;
  return (
    <Layout>
      <SEO />
      <section className="about">
        <p dangerouslySetInnerHTML={{ __html: info.short_description.value }} />
      </section>
      <section className ="future-shows">
        <h2>Future Shows</h2>
        <div className={"future showList"}>
          <ShowList shows={data.futureShows.elements.shows} future="true"/>
        </div>
      </section>
      <section className="theaterFacts" >
        <h2>Czech Theater Fact</h2>
        <Fact facts={data.facts} />
      </section>
      <section className="past-shows">
        <h2>Past Shows</h2>
        <div className={"past showList"}>
          <ShowList shows={data.pastShows.elements.shows} />
        </div>
      </section>
      <section className="mission">
      <h2>Our Mission</h2>
        <div dangerouslySetInnerHTML={{ __html: info.about_us.value }} /> 
      </section>
      <section className="contact">
        <h2>Contact us</h2>
        <div dangerouslySetInnerHTML={{ __html: info.contact_info.resolvedData.html }} />
        <SocialMediaIcons urls={info.social_media.value.split(",")} color="green" />
      </section>
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
  query indexQuery {
    kontentItemBasicInfo {
      ...BasicInfoFragment
    }
    futureShows: kontentItemShowSection (system: {codename: {eq: "future_shows"}}) {
      ...ShowListFragment
    }
    pastShows: kontentItemShowSection (system: {codename: {eq: "past_shows"}}) {
      ...ShowListFragment
      
  }
  facts: allKontentItemTheaterFact {
    edges {
      node {
        system {
          codename
        }
        elements {
          description {
            resolvedData {
              html
            }
          }
          image {
            value {
              url
            }
          }
        }
      }
    }
  }
}
`