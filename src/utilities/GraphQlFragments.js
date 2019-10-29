import { graphql } from 'gatsby';

export const BasicInfoFragment = graphql`
    fragment BasicInfoFragment on KenticoCloudItemBasicInfo {
        elements {
            about_us {
              value
            }
            contact_info {
              resolvedHtml
            }
            favicon {
                assets{
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
    fragment ShowListFragment on KenticoCloudItemShowSection {
      elements {
        shows {
          elements {
            main_image {
              assets {
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
              assets {
                url
                description
              }
            }
          }
        }
      }
    }
`;


