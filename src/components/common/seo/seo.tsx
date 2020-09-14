import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title?: string
  description?: string
}

export default function SEO({ title, description }: Props): ReactElement {
  return (
    <Helmet>
      {title && <title> {title} </title>}
      {description && <meta name="description" content={description} />}
    </Helmet>
  )
}
