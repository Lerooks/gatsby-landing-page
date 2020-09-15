import React, { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import BaseLayout from './base-layout'

interface Props {
  children: ReactNode
}

export default function BaseLayoutContainer({ children }: Props): ReactElement {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <BaseLayout>{children}</BaseLayout>
      </ThemeProvider>
    </>
  )
}
