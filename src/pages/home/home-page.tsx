import React, { ReactElement } from 'react'
import { PageProps } from 'gatsby'
import BaseLayout from 'layouts/base-layout'
import Banner from 'components/home/banner'

export default function HomePage({ data }: PageProps): ReactElement {
  return (
    <BaseLayout>
      <Banner></Banner>
    </BaseLayout>
  )
}
