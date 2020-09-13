import React, { ReactElement } from 'react'
import { PageProps } from 'gatsby'
import BaseLayout from 'layouts/base-layout'

export default function HomePage({ data }: PageProps): ReactElement {
  return (
    <BaseLayout>
      <h1> Home Page </h1>
    </BaseLayout>
  )
}
