import styled from 'styled-components'
import Container from 'components/common/container'

export const Charges = styled.section`
  position: relative;
  padding: 50px 0;

  @media screen and (min-width: 992px) {
    padding: 75px 0;
  }
`

export const ChargesContainer = styled(Container)``

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'image' 'content';
  grid-template-columns: 1fr;
  gap: 30px 0;

  @media screen and (min-width: 992px) {
    gap: 0 50px;
    justify-content: center;
    align-items: center;
    grid-template-columns: 380px 500px;
    grid-template-areas: 'content image';
  }
`

export const Content = styled.div`
  grid-area: content;
`

export const Title = styled.h2`
  max-width: 380px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 12px;
  color: #252aff;
`

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  color: #666666;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (min-width: 992px) {
    max-width: 317px;
  }
`

export const ImageWrapper = styled.div`
  max-width: 650px;
  width: 100%;
  grid-area: image;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
`
