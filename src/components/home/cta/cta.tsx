import Button from 'components/common/button'
import React, { ReactElement } from 'react'
import * as S from './cta-styles'
import CtaImage from 'assets/images/home/cta.png'

export default function CTA(): ReactElement {
  return (
    <S.CTA>
      <S.CTAContainer>
        <S.CTAContent>
          <S.CTATitle> Gostou? </S.CTATitle>
          <S.CTAText>Fazer seu cadastro na Juno é grátis e não leva nem 5 minutos.</S.CTAText>
          <Button> Comece agora </Button>
        </S.CTAContent>
      </S.CTAContainer>
      <S.CTAImageWrapper>
        <S.CTAImage src={CtaImage}></S.CTAImage>
      </S.CTAImageWrapper>
    </S.CTA>
  )
}
