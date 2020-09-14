import Button from 'components/common/button'
import React, { ReactElement } from 'react'
import * as S from './cta-styles'
import CtaImage from 'assets/images/home/cta.png'

interface Props {
  title: string
  description: string
  buttonLabel: string
}

export default function CTA({ title, description, buttonLabel }: Props): ReactElement {
  return (
    <S.CTA>
      <S.CTAContainer>
        <S.CTAContent>
          <S.CTATitle> {title} </S.CTATitle>
          <S.CTAText> {description} </S.CTAText>
          <Button title={buttonLabel}> {buttonLabel} </Button>
        </S.CTAContent>
      </S.CTAContainer>
      <S.CTAImageWrapper>
        <S.CTAImage src={CtaImage}></S.CTAImage>
      </S.CTAImageWrapper>
    </S.CTA>
  )
}
