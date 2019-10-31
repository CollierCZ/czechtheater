import { graphql } from 'gatsby';

export const BasicInfoFragment = graphql`
    fragment BasicInfoFragment on KontentItemBasicInfo {
        elements {
            about_us {
              value
            }
            contact_info {
              resolvedData {
                html
              }
            }
            favicon {
              value {
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
    fragment ShowListFragment on KontentItemShowSection {
      elements {
        shows {
          linked_items {
            elements {
              main_image {
                value {
                  url
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
              gallery {
                value {
                  url
                  description
                }
              }
            }
          }
        }
      }
    }
`;


