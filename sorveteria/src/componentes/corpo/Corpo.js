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
margin-left:10%;
`

export const Ul = styled.ul`
/* margin-left:5%; */
color: #000;
`

export const Li = styled.li`
color: #000;
`

export const SeUl = styled.div`
margin-left:20%;
`

export default function Corpo() {

   return(
      <>
      <TudoCorpo>
      <Card1>
      <H2>Sabores</H2>
      <DivDis>
      <Ul>
          <Li>Uva</Li>
          <Li>Limão</Li>
          <Li>Moran</Li>
          <Li>Choco</Li>
          <Li>Creme</Li>
          <Li>Melan</Li>
      </Ul>
      <SeUl>
      <Ul>
          <Li>Milho</Li>
          <Li>Algodão doce</Li>
          <Li>Groselha</Li>
          <Li>Caju</Li>
          <Li>Banana</Li>
          <Li>Maçã verde</Li>
      </Ul>
      </SeUl>
      </DivDis>
      </Card1>


      <Card2>
      <H2>Acompanhamentos</H2>
      <DivDis>
      <Ul>
          <Li>Cereja</Li>
          <Li>Calda de Chocolate</Li>
          <Li>Bolacha</Li>
          <Li>Granulado</Li>
          <Li>Leite condensado</Li>
          <Li>Leite em pó</Li>
      </Ul>
      
      </DivDis>
      </Card2>
      </TudoCorpo>
      </>
)}