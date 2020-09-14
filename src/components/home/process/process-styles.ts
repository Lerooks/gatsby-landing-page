import { Container } from 'components/common/container/container-styles'
import styled from 'styled-components'

export const Process = styled.section`
  background: #f1f5fb;
  padding-top: 45px;
  padding-right: 0;
  padding-bottom: 60px;
  padding-left: 0;
`

export const ProcessContainer = styled(Container)``

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: #333333;
  margin-top: 0;
  margin-bottom: 32px;
  max-width: 280px;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px 0;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 100px;
  }
`

export const Item = styled.li`
  position: relative;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  color: #666666;
  padding-left: 40px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;
    color: #fc8b24;
  }

  &:nth-of-type(1) {
    &::before {
      content: '1.';
    }
  }

  &:nth-of-type(2) {
    &::before {
      content: '2.';
    }
  }

  &:nth-of-type(3) {
    &::before {
      content: '3.';
    }
  }
`
