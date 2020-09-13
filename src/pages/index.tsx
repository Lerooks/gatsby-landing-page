import React, { ReactElement } from 'react'
import { PageProps } from 'gatsby'
import BaseLayout from 'layouts/base-layout'

export default function IndexPage({ data }: PageProps): ReactElement {
  return (
    <BaseLayout>
      <h1> Index Page </h1>
    </BaseLayout>
  )
}
