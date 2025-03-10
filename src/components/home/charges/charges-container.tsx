import { useStaticQuery, graphql } from 'gatsby'
import React, { ReactElement } from 'react'
import Charges from './charges'

type DataProps = {
  dataJson: {
    indexPage: {
      content: {
        charges: {
          title: string
          description: string
        }
      }
    }
  }
}

export default function ChargesContainer(): ReactElement {
  const data: DataProps = useStaticQuery(graphql`
    {
      dataJson {
        indexPage {
          content {
            charges {
              description
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Charges
      title={data.dataJson.indexPage.content.charges.title}
      description={data.dataJson.indexPage.content.charges.description}
    ></Charges>
  )
}
