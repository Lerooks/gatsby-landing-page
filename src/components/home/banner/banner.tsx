import React, { ReactElement } from 'react'
import Button from 'components/common/button'
import BannerImage from 'assets/images/home/banner-bg.png'
import * as S from './banner-styles'

export default function Banner(): ReactElement {
  return (
    <S.Banner>
      <S.Background>
        <S.BackgroundImage src={BannerImage}></S.BackgroundImage>
      </S.Background>
      <S.BannerContainer>
        <S.Content>
          <S.Title> Profissionalize seu negócio recebendo pagamentos por boleto </S.Title>
          <S.Text>
            Na Juno você não precisa ter conta jurídica e nem carteira de cobrança junto ao banco para emitir boletos.
            Basta seu CPF. Simples assim!
          </S.Text>
          <Button> Comece agora </Button>
        </S.Content>
      </S.BannerContainer>
    </S.Banner>
  )
}
