import styled from 'styled-components'
import { Container } from 'components/common/container/container-styles'
export const CTA = styled.section`
  background-color: ${props => props.theme.colors.brandDark};
  position: relative;

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
  color: #ffffff;
  font-size: 32px;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  margin-bottom: 20px;
  margin-top: 0;
`

export const CTAText = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.4px;
  line-height: 140%;
  margin-bottom: 30px;
  margin-top: 0;
  max-width: 280px;
`

export const CTAImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;

  @media screen and (min-width: 992px) {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    width: 50%;
  }
`

export const CTAImage = styled.img`
  height: 393px;
  left: -186px;
  position: relative;

  @media screen and (min-width: 600px) {
    height: 100%;
    left: 0;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    object-fit: none;
    width: auto;
  }
`
