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


