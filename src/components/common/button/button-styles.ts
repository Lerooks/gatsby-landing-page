import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background-color: ${props => props.theme.colors.brand};
  border-radius: 4px;
  border-style: unset;
  border-width: unset;
  color: #ffffff;
  display: inline-flex;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  padding: 11px 22px;
  text-align: center;
  transition: background-color 0.3s ease-out 0s;

  &:hover,
  &:focus,
  &:active {
    background: #030dbd;
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
`
