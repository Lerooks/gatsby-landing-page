import React, { ReactElement } from 'react'
import * as S from './charges-styles'
import Image from '../../../../static/images/home/cobrancas-recorrentes.png'

interface Props {
  title: string
  description: string
}

export default function Charges({ title, description }: Props): ReactElement {
  return (
    <S.Charges>
      <S.ChargesContainer>
        <S.Wrapper>
          <S.ImageWrapper>
            <S.Image src={Image}></S.Image>
          </S.ImageWrapper>
          <S.Content>
            <S.Title> {title} </S.Title>
            <S.Text>{description}</S.Text>
          </S.Content>
        </S.Wrapper>
      </S.ChargesContainer>
    </S.Charges>
  )
}
