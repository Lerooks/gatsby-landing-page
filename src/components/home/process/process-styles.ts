import { Container } from 'components/common/container/container-styles'
import styled from 'styled-components'

export const Process = styled.section`
  background: #f1f5fb;
  padding-bottom: 60px;
  padding-left: 0;
  padding-right: 0;
  padding-top: 45px;
`

export const ProcessContainer = styled(Container)``

export const Title = styled.h2`
  color: ${props => props.theme.colors.gray400};
  font-size: 32px;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  margin-bottom: 32px;
  margin-top: 0;
  max-width: 280px;
`

export const List = styled.ul`
  display: grid;
  grid-gap: 40px 0;
  grid-template-columns: 1fr;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 992px) {
    grid-gap: 0 100px;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Item = styled.li`
  color: ${props => props.theme.colors.gray300};
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.4px;
  line-height: 140%;
  padding-left: 40px;
  position: relative;

  &::before {
    color: #${props => props.theme.colors.orange};
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    height: 40px;
    left: 0;
    line-height: 36px;
    position: absolute;
    top: 0;
    width: 40px;
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
