import styled from 'styled-components'
import { Container } from 'components/common/container/container-styles'

export const Footer = styled.footer`
  background-color: #fff;
  padding: 30px 0;

  @media screen and (min-width: 992px) {
    padding: 15px 0;
  }
`

export const FooterContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`

export const Group = styled.div`
  margin-bottom: 20px;
`

export const Text = styled.p`
  color: #333333;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  margin: 0;
`

export const BiggerText = styled(Text)`
  font-size: 16px;
`
