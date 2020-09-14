import styled from 'styled-components'
import { Container } from 'components/common/container/container-styles'

export const Banner = styled.section`
  position: relative;
  background-color: #00155f;
  padding: 65px 0;
  margin-top: 63px;
`

export const BannerContainer = styled(Container)``

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

export const BackgroundImage = styled.img``

export const Content = styled.div`
  position: relative;
  max-width: 520px;
  z-index: 10;
`

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
  margin-bottom: 20px;

  @media screen and (min-width: 992px) {
    font-size: 44px;
    line-height: 48px;
  }
`

export const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-bottom: 30px;
`
