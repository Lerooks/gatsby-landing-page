import { useStaticQuery, graphql } from 'gatsby'
import React, { ReactElement } from 'react'
import Banner from './banner'

type DataProps = {
  dataJson: {
    indexPage: {
      content: {
        banner: {
          title: string
          description: string
          buttonLabel: string
        }
      }
    }
  }
}

export default function BannerContainer(): ReactElement {
  const data: DataProps = useStaticQuery(graphql`
    {
      dataJson {
        indexPage {
          content {
            banner {
              title
              description
              buttonLabel
            }
          }
        }
      }
    }
  `)

  return (
    <Banner
      title={data.dataJson.indexPage.content.banner.title}
      description={data.dataJson.indexPage.content.banner.description}
      buttonLabel={data.dataJson.indexPage.content.banner.buttonLabel}
    ></Banner>
  )
}
