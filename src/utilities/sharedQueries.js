import { graphql } from "gatsby";

export const basicInfoQuery = graphql`
  query BasicInfoQuery {
    kenticoCloudItemBasicInfo {
      elements {
        name {
          value
        }
        short_description {
          value
        }
        favicon {
          assets{
            url
          }
        }
      }
    }
  }
`