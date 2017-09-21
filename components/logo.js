import React from 'react'
import styled from 'react-emotion'

export default (props) => (<Title {...props}>Chantum</Title>)

const Title = styled('h1') `
  font-family: 'Playfair Display', serif;
  font-weight: 900;
`