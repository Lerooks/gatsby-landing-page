import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 30px 0;

  @media screen and (min-width: 992px) {
    padding: 15px 0;
  }
`

export const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  width: 100%;

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
