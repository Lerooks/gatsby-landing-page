import React, { ReactElement } from 'react'
import Button from 'components/button'
import Container from 'components/container'
import Logo from 'assets/images/brand/juno.svg'
import * as S from './header-styles'

export default function Header(): ReactElement {
  return (
    <S.Header>
      <Container>
        <S.HeaderContent>
          <S.Logo src={Logo}></S.Logo>
          <Button> Comece agora </Button>
        </S.HeaderContent>
      </Container>
    </S.Header>
  )
}
