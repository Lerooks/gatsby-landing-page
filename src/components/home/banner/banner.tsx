import React, { ReactElement } from 'react'
import Button from 'components/common/button'
import BannerImage from '../../../../static/images/home/banner-bg.png'
import * as S from './banner-styles'

interface Props {
  title: string
  description: string
  buttonLabel: string
}

export default function Banner({ title, description, buttonLabel }: Props): ReactElement {
  return (
    <S.Banner>
      <S.Background>
        <S.BackgroundImage src={BannerImage}></S.BackgroundImage>
      </S.Background>
      <S.BannerContainer>
        <S.Content>
          <S.Title> {title} </S.Title>
          <S.Text>{description}</S.Text>
          <Button title={buttonLabel}> {buttonLabel} </Button>
        </S.Content>
      </S.BannerContainer>
    </S.Banner>
  )
}
