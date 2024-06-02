import React, {Children } from 'react'
import styled from 'styled-components'

const Button = ({children,onClick}) => {
  return (
    <div>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  )
}

export default Button

const StyledButton = styled.button`
    background-color: blue;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    color: white;
`