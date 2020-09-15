import styled from 'styled-components'
import Container from 'components/common/container'

export const Charges = styled.section`
  padding: 50px 0;
  position: relative;

  @media screen and (min-width: 992px) {
    padding: 75px 0;
  }
`

export const ChargesContainer = styled(Container)``

export const Wrapper = styled.div`
  display: grid;
  gap: 30px 0;
  grid-template-areas: 'image' 'content';
  grid-template-columns: 1fr;

  @media screen and (min-width: 992px) {
    align-items: center;
    gap: 0 50px;
    grid-template-areas: 'content image';
    grid-template-columns: 380px 500px;
    justify-content: center;
  }
`

export const Content = styled.div`
  grid-area: content;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.brand};
  font-size: 32px;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  margin-bottom: 12px;
  margin-top: 0;
  max-width: 380px;
`

export const Text = styled.p`
  color: ${props => props.theme.colors.gray300};
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.4px;
  line-height: 140%;
  margin-bottom: 0;
  margin-top: 0;

  @media screen and (min-width: 992px) {
    max-width: 317px;
  }
`

export const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-area: image;
  justify-content: center;
  justify-self: center;
  max-width: 650px;
  width: 100%;
`

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
`
