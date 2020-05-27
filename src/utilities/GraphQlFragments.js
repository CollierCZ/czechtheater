import { graphql } from 'gatsby';

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
    fragment ShowListFragment on kontent_item_show_section {
      elements {
        shows {
          value {
            ... on kontent_item_show {
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


