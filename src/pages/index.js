import React from "react";
import { graphql } from "gatsby";

import Facts from "../components/Fact/Facts";
import Layout from "../layout/layout";
import ShowList from "../components/ShowList/ShowList";
import Seo from "../components/Seo/Seo";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";

const IndexPage = ({ data }) => {
  const info = data.kontentItemBasicInfo.elements;
  const factNodes = data.facts.nodes;
  return (
    <Layout>
      <Seo />
      <section className="about">
        <p dangerouslySetInnerHTML={{ __html: info.short_description.value }} />
      </section>
      <section className="future-shows">
        <h2>Future Shows</h2>
        <div className={"future showList"}>
          <ShowList shows={data.futureShows.elements.shows} future="true" />
        </div>
      </section>
      <section className="theaterFacts">
        <h2>Czech Theater Fact</h2>
        <Facts facts={factNodes} />
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
        <div dangerouslySetInnerHTML={{ __html: info.contact_info.value }} />
        <SocialMediaIcons
          urls={info.social_media.value.split(",")}
          color="green"
        />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query indexQuery {
    kontentItemBasicInfo {
      ...BasicInfoFragment
    }
    futureShows: kontentItemShowSection(
      system: { codename: { eq: "future_shows" } }
    ) {
      ...ShowListFragment
    }
    pastShows: kontentItemShowSection(
      system: { codename: { eq: "past_shows" } }
    ) {
      ...ShowListFragment
    }
    facts: allKontentItemTheaterFact {
      nodes {
        system {
          codename
        }
        elements {
          description {
            links {
              url_slug
              link_id
            }
            value
          }
          image {
            value {
              height
              width
              url
            }
          }
        }
      }
    }
  }
`;
