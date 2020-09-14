import { useStaticQuery, graphql } from 'gatsby'
import React, { ReactElement } from 'react'
import CTA from './cta'

type DataProps = {
  dataJson: {
    indexPage: {
      content: {
        cta: {
          title: string
          description: string
          buttonLabel: string
        }
      }
    }
  }
}

export default function CTAContainer(): ReactElement {
  const data: DataProps = useStaticQuery(graphql`
    {
      dataJson {
        indexPage {
          content {
            cta {
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
    <CTA
      title={data.dataJson.indexPage.content.cta.title}
      description={data.dataJson.indexPage.content.cta.description}
      buttonLabel={data.dataJson.indexPage.content.cta.buttonLabel}
    ></CTA>
  )
}
