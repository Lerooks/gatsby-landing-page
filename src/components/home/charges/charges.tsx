import React, { ReactElement } from 'react'
import * as S from './charges-styles'
import Image from 'assets/images/home/cobrancas-recorrentes.png'

export default function Charges(): ReactElement {
  return (
    <S.Charges>
      <S.ChargesContainer>
        <S.Wrapper>
          <S.ImageWrapper>
            <S.Image src={Image}></S.Image>
          </S.ImageWrapper>
          <S.Content>
            <S.Title> Emita cobranças recorrentes </S.Title>
            <S.Text>
              Com a Juno, você pode emitir cobranças recorrentes com lembretes que ajudam a diminuir a inadimplência dos
              seus clientes.
            </S.Text>
          </S.Content>
        </S.Wrapper>
      </S.ChargesContainer>
    </S.Charges>
  )
}
