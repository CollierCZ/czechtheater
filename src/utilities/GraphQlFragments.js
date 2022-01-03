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
          description
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
                  description
                  url
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
