import React, { ReactElement } from 'react'
import { PageProps } from 'gatsby'
import BaseLayout from 'layouts/base-layout'
import Banner from 'components/home/banner'

type DataProps = {}

export default function IndexPage({}: PageProps<DataProps>): ReactElement {
  return (
    <BaseLayout>
      <Banner></Banner>
    </BaseLayout>
  )
}
