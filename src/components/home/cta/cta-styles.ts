import styled from 'styled-components'
import { Container } from 'components/common/container/container-styles'

export const CTA = styled.section`
  position: relative;
  background-color: #00155f;

  @media screen and (min-width: 992px) {
    padding: 139px 0;
  }
`

export const CTAContainer = styled(Container)``

export const CTAContent = styled.div`
  padding: 75px 0;

  @media screen and (min-width: 992px) {
    padding: 0;
  }
`

export const CTATitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 20px;
`

export const CTAText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 30px;
  max-width: 280px;
`

export const CTAImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 50%;
  }
`

export const CTAImage = styled.img`
  position: relative;
  height: 393px;
  left: -186px;

  @media screen and (min-width: 600px) {
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 992px) {
    width: auto;
    object-fit: none;
  }
`
