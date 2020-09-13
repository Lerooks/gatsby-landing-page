import React, { ReactElement } from 'react'
import * as S from './footer-styles'

export default function Footer(): ReactElement {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.Group>
          <S.BiggerText> Juno.com.br </S.BiggerText>
        </S.Group>
        <S.Group>
          <S.Text> 2020 Juno. Todos os direitos reservados. </S.Text>
          <S.Text> Juno é uma plataforma de BoletoBancário.com </S.Text>
        </S.Group>
        <S.Group>
          <S.BiggerText> #tamojuno </S.BiggerText>
        </S.Group>
      </S.FooterContainer>
    </S.Footer>
  )
}
