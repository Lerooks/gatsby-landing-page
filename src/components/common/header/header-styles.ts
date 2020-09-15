import styled from 'styled-components'
import { Container } from 'components/common/container/container-styles'

export const Header = styled.header`
  background: #ffffff;
  left: 0;
  padding: 11.5px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`

export const HeaderContainer = styled(Container)``

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
  align-items: center;
  border-width: unset;
  display: inline-flex;
  height: 25px;
  justify-content: center;
  width: 88px;
`
