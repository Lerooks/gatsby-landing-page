import React, { ReactElement, ReactNode } from 'react'
import Header from 'components/header'
import * as S from './base-layout-styles'

interface Props {
  children: ReactNode
}

export default function BaseLayout({ children }: Props): ReactElement {
  return (
    <>
      <Header></Header>
      <S.Main>{children}</S.Main>
    </>
  )
}
