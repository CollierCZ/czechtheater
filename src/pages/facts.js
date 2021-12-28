import React from "react";
import { graphql } from "gatsby";

import Fact from "../components/Fact/Fact";
import Layout from "../layout/layout";
import Seo from "../components/Seo/Seo";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";

const FactListing = ({ data }) => {
  const info = data.kontentItemBasicInfo.elements;
  const nodes = data.facts.nodes
  return (
    <Layout>
      <Seo />
      <section className="theaterFacts">
        {nodes.map(fact => <div  key={fact.id} style={{ padding: "2rem 0" }}><Fact fact={fact} /></div>)}
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

export default FactListing;

export const query = graphql`
  query factQuery {
    kontentItemBasicInfo {
      ...BasicInfoFragment
    }
    facts: allKontentItemTheaterFact {
      nodes {
        id
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
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 250
                    height: 150
                    placeholder: BLURRED
                    transformOptions: { fit: CONTAIN }
                    backgroundColor: "rgba(255,255,255,1)"
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;
