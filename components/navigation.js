import React from 'react'
import styled from 'react-emotion'

import Logo from './logo'

export default ({ showHome = false, ...props }) => {
  return (
    <Nav {...props}>      
      {showHome && <Title href="/"><Logo /></Title>}
      <a>About</a>
      <a>Contact</a>
    </Nav>
  )
}

const Nav = styled('nav')`
  min-height: 72px;
  display: flex;
  padding-right: 30px;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  font-weight: 200;
  color: #888;
  
  & a {
    padding: 0 15px;
    text-decoration: none;
  }
`

const Title = styled('a')`
  margin-right: auto;
  color: #212121;
`
