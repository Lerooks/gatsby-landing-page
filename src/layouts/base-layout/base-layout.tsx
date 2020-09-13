import React, { ReactElement, ReactNode } from 'react'
import * as S from './base-layout-styles'

interface Props {
  children: ReactNode
}

export default function BaseLayout({ children }: Props): ReactElement {
  return <S.Main>{children}</S.Main>
}
