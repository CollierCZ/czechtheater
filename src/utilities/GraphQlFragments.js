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
                fixed(height: 150, width: 150) {
                  srcWebp
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
    fragment ShowListFragment on KontentItemShowSection {
      elements {
        shows {
          linked_items {
            ... on KontentItemShow {
              elements {
                main_image {
                  value {
                    fluid(maxHeight: 353, maxWidth: 353, fit: "crop") {
                      ...KontentAssetFluid_withWebp
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


