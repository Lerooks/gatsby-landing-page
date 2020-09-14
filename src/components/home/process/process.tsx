import React, { ReactElement } from 'react'
import * as S from './process-styles'

interface Props {
  title: string
  items: Array<{ text: string }>
}

export default function Process({ title, items }: Props): ReactElement {
  return (
    <S.Process>
      <S.ProcessContainer>
        <S.Title> {title} </S.Title>
        <S.List>
          {items.map(item => (
            <S.Item key={item.text}>{item.text}</S.Item>
          ))}
        </S.List>
      </S.ProcessContainer>
    </S.Process>
  )
}
