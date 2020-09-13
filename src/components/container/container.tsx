import React, { ReactElement, ReactNode } from 'react'
import * as S from './container-styles'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props): ReactElement {
  return <S.Container> {children} </S.Container>
}
