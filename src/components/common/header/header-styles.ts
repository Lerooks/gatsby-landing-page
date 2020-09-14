import styled from 'styled-components'
import { Container } from 'components/common/container/container-styles'

export const Header = styled.header`
  background: #ffffff;
  padding: 11.5px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
`

export const HeaderContainer = styled(Container)``

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  border-width: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 88px;
`
