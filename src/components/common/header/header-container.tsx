import { useStaticQuery, graphql } from 'gatsby'
import React, { ReactElement } from 'react'
import Header from './header'

type DataProps = {
  dataJson: {
    headerComponent: {
      content: {
        buttonLabel: string
      }
    }
  }
}

export default function HeaderContainer(): ReactElement {
  const data: DataProps = useStaticQuery(graphql`
    {
      dataJson {
        headerComponent {
          content {
            buttonLabel
          }
        }
      }
    }
  `)

  return <Header buttonLabel={data.dataJson.headerComponent.content.buttonLabel}></Header>
}
