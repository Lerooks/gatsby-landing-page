import { useStaticQuery, graphql } from 'gatsby'
import React, { ReactElement } from 'react'
import Footer from './footer'

type DataProps = {
  dataJson: {
    footerComponent: {
      content: {
        firstText: string
        secondText: {
          firstLine: string
          secondLine: string
        }
        thirdText: string
      }
    }
  }
}

export default function FooterContainer(): ReactElement {
  const data: DataProps = useStaticQuery(graphql`
    {
      dataJson {
        footerComponent {
          content {
            firstText
            secondText {
              firstLine
              secondLine
            }
            thirdText
          }
        }
      }
    }
  `)

  return (
    <Footer
      firstText={data.dataJson.footerComponent.content.firstText}
      secondText={{
        firstLine: data.dataJson.footerComponent.content.secondText.firstLine,
        secondLine: data.dataJson.footerComponent.content.secondText.secondLine,
      }}
      thirdText={data.dataJson.footerComponent.content.thirdText}
    ></Footer>
  )
}
