import React, { ReactElement } from 'react'
import BaseLayout from 'layouts/base-layout'
import Banner from 'components/home/banner'
import Process from 'components/home/process'
import Charges from 'components/home/charges'

export default function IndexPage(): ReactElement {
  return (
    <BaseLayout>
      <Banner></Banner>
      <Process></Process>
      <Charges></Charges>
    </BaseLayout>
  )
}
