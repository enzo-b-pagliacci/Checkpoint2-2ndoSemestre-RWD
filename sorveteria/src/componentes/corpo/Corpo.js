import React from 'react'
import styled from 'styled-components'

export const TudoCorpo = styled.div`
@media screen and (min-width: 1201px) {
    display: flex;
justify-content: center;
/* flex-direction: column; */
}
@media screen and (max-width: 1200px) and (min-width: 710px) {
       display: flex;
justify-content: center;
flex-direction: column;
}
@media screen and (max-width: 709px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
`

export const Card1 = styled.div`
@media screen and (min-width: 1201px) {
    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 2px;
    width: 30%;
    box-shadow: 0.8px 0.8px 0.8px 0.8px #bfbfbf;
    
}
@media screen and (max-width: 1200px) and (min-width: 710px) {
    margin-left: 25%;
    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 2px;
    width: 50%;
    box-shadow: 0.8px 0.8px 0.8px 0.8px #bfbfbf;
    margin-bottom:3%;

}
@media screen and (max-width: 709px) {
    margin-left: 10%;
    margin-bottom:3%;
    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 2px;
    width: 80%;
    box-shadow: 0.8px 0.8px 0.8px 0.8px #bfbfbf;
}
`

export const Card2 = styled.div`
@media screen and (min-width: 1201px) {
    margin-left:3%;
    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 2px;
    width: 30%;
    box-shadow: 0.8px 0.8px 0.8px 0.8px #bfbfbf;
    
}
@media screen and (max-width: 1200px) and (min-width: 710px) {
     margin-left: 25%;
    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 2px;
    width: 50%;
    box-shadow: 0.8px 0.8px 0.8px 0.8px #bfbfbf;
    margin-bottom:3%;

}
@media screen and (max-width: 709px) {
    margin-left: 10%;
    margin-bottom:3%;
    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 2px;
    width: 80%;
    box-shadow: 0.8px 0.8px 0.8px 0.8px #bfbfbf;
}
`

export const H2 = styled.h2`
text-align: center;
font-size: 2em;
color: #145bff;
`
export const DivDis = styled.div`
display: flex;
`

export const Ul = styled.ul`
color: black;
`

export default function Corpo() {

   return(
      <>
      <TudoCorpo>
      <Card1>
      <H2>Sabores</H2>
      <DivDis>
      <Ul>
          <li>Uva</li>
          <li>Limão</li>
          <li>Morango</li>
          <li>Chocolate</li>
          <li>Creme</li>
          <li>Melancia</li>
      </Ul>
      <Ul>
          <li>Milho</li>
          <li>Algodão doce</li>
          <li>Groselha</li>
          <li>Caju</li>
          <li>Banana</li>
          <li>Maçã verde</li>
      </Ul>
      </DivDis>
      </Card1>
      <Card2>
      <H2>Acompanhamentos</H2>
      <DivDis>
      <Ul>
          <li>Cereja</li>
          <li>Calda de Chocolate</li>
          <li>Bolacha</li>
          <li>Granulado</li>
          <li>Leite condensado</li>
          <li>Leite em pó</li>
      </Ul>
      </DivDis>
      </Card2>
      </TudoCorpo>
      </>
)}