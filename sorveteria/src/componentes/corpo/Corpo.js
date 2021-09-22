import React from 'react'
import styled from 'styled-components'

export const H2 = styled.h2`
font-size: 16px;
color: blue;
`
export const Ul = styled.ul`
color: green;
`

export default function Corpo() {

   return(
      <>
      <H2>Sabores</H2>
      <Ul>
          <li>Uva</li>
          <li>Limão</li>
          <li>Morango</li>
          <li></li>
      </Ul>
      <h2></h2>
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
      </>
)}