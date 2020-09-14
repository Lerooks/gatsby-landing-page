import { useStaticQuery, graphql } from 'gatsby'
import React, { Props, ReactElement } from 'react'
import Process from './process'

type DataProps = {
  dataJson: {
    indexPage: {
      content: {
        process: {
          title: string
          items: Array<{ text: string }>
        }
      }
    }
  }
}

export default function ProcessContainer(): ReactElement {
  const data: DataProps = useStaticQuery(graphql`
    {
      dataJson {
        indexPage {
          content {
            process {
              title
              items {
                text
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Process
      title={data.dataJson.indexPage.content.process.title}
      items={data.dataJson.indexPage.content.process.items}
    ></Process>
  )
}
