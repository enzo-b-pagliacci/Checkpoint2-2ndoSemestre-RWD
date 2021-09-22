import React from 'react'
import Logo from '../img/sorveteria.png'
// import styled from 'styled-components'



// export const IMG = styled.img`
// width: 7%;
// `
// export const HEADER = styled.header`
// background-color: blue;
// `
export default function Cabecalho () {


   return(
       <>
          <HEADER>
               <IMG src={Logo} alt="SORVETERIA ICE CREAM" />
               <h1>Sorveteria IceLand</h1>
               <p>Keep calm and let it go</p>
          </HEADER>
       </>
)}