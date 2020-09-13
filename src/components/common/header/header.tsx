import React, { ReactElement } from 'react'
import Button from 'components/common/button'
import Container from 'components/common/container'
import Logo from 'assets/images/brand/juno.svg'
import * as S from './header-styles'

export default function Header(): ReactElement {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.Logo src={Logo} alt="Juno" title="Juno"></S.Logo>
          <Button> Comece agora </Button>
        </S.HeaderContent>
      </S.HeaderContainer>
    </S.Header>
  )
}
