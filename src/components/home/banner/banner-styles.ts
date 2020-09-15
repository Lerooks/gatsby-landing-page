import styled from 'styled-components'
import { Container } from 'components/common/container/container-styles'

export const Banner = styled.section`
  background-color: ${props => props.theme.colors.brandDark};
  margin-top: 63px;
  padding: 65px 0;
  position: relative;
`

export const BannerContainer = styled(Container)``

export const Background = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`

export const BackgroundImage = styled.img`
  transform: translateX(450px);

  @media screen and (min-width: 992px) {
    height: 100%;
    object-fit: cover;
    transform: unset;
    width: 100%;
  }
`

export const Content = styled.div`
  max-width: 520px;
  position: relative;
  z-index: 10;
`

export const Title = styled.h1`
  color: #ffffff;
  font-feature-settings: 'pnum' on, 'lnum' on;
  font-size: 40px;
  font-style: normal;
  font-weight: bold;
  line-height: 40px;
  margin-bottom: 20px;
  margin-top: 0;

  @media screen and (min-width: 992px) {
    font-size: 44px;
    line-height: 48px;
  }
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.4px;
  line-height: 140%;
  margin-bottom: 30px;
  margin-top: 0;
`
