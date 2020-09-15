import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'

export default function Fonts(): ReactElement {
  return (
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
    </Helmet>
  )
}
