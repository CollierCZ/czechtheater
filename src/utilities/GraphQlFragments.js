import { graphql } from "gatsby";

export const BasicInfoFragment = graphql`
  fragment BasicInfoFragment on kontent_item_basic_info {
    elements {
      about_us {
        value
      }
      contact_info {
        value
      }
      favicon {
        value {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 100, height: 100)
            }
          }
          url
        }
      }
      name {
        value
      }
      short_description {
        value
      }
      social_media {
        value
      }
    }
  }
`;

export const ShowListFragment = graphql`
  fragment ShowListFragment on kontent_item_show_section {
    elements {
      shows {
        value {
          ... on kontent_item_show {
            elements {
              main_image {
                value {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        layout: FIXED
                        width: 291
                        placeholder: BLURRED
                        height: 291
                        transformOptions: { fit: COVER }
                      )
                    }
                  }
                  description
                }
              }
              name {
                value
              }
              url {
                value
              }
              short_description {
                value
              }
              ticket_link {
                value
              }
            }
          }
        }
      }
    }
  }
`;
