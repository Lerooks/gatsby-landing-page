import React, { ReactElement } from 'react'
import { graphql, PageProps } from 'gatsby'
import BaseLayout from 'layouts/base-layout'
import SEO from 'components/common/seo'
import Fonts from 'components/common/fonts'
import Banner from 'components/home/banner'
import Process from 'components/home/process'
import Charges from 'components/home/charges'
import CTA from 'components/home/cta'

type DataProps = {
  dataJson: {
    indexPage: {
      seo: {
        title: string
        description: string
      }
    }
  }
}

export default function IndexPage({ data }: PageProps<DataProps>): ReactElement {
  return (
    <>
      <SEO title={data.dataJson.indexPage.seo.title} description={data.dataJson.indexPage.seo.description}></SEO>
      <Fonts></Fonts>
      <BaseLayout>
        <Banner></Banner>
        <Process></Process>
        <Charges></Charges>
        <CTA></CTA>
      </BaseLayout>
    </>
  )
}

export const query = graphql`
  {
    dataJson {
      indexPage {
        seo {
          title
          description
        }
      }
    }
  }
`
