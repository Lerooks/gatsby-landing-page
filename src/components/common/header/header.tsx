import React, { ReactElement } from 'react'
import Button from 'components/common/button'
import Logo from 'assets/images/brand/juno.svg'
import * as S from './header-styles'

interface Props {
  buttonLabel: string
}

export default function Header({ buttonLabel }: Props): ReactElement {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.Logo src={Logo} alt="Juno" title="Juno"></S.Logo>
          <Button title={buttonLabel}> {buttonLabel} </Button>
        </S.HeaderContent>
      </S.HeaderContainer>
    </S.Header>
  )
}
