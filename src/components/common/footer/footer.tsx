import React, { ReactElement } from 'react'
import * as S from './footer-styles'

interface Props {
  firstText: string
  secondText: {
    firstLine: string
    secondLine: string
  }
  thirdText: string
}

export default function Footer({ firstText, secondText, thirdText }: Props): ReactElement {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.Group>
          <S.BiggerText> {firstText} </S.BiggerText>
        </S.Group>
        <S.Group>
          <S.Text> {secondText.firstLine} </S.Text>
          <S.Text> {secondText.secondLine} </S.Text>
        </S.Group>
        <S.Group>
          <S.BiggerText> {thirdText} </S.BiggerText>
        </S.Group>
      </S.FooterContainer>
    </S.Footer>
  )
}
