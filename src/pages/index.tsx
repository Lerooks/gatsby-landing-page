import React, { ReactElement } from 'react'
import BaseLayout from 'layouts/base-layout'
import SEO from 'components/common/seo'
import Banner from 'components/home/banner'
import Process from 'components/home/process'
import Charges from 'components/home/charges'
import CTA from 'components/home/cta'

export default function IndexPage(): ReactElement {
  return (
    <>
      <SEO></SEO>
      <BaseLayout>
        <Banner></Banner>
        <Process></Process>
        <Charges></Charges>
        <CTA></CTA>
      </BaseLayout>
    </>
  )
}
