import React from 'react'
import Logo from '../img/sorveteria.png'
import {Head, Image} from '../../styled'

export default function Cabecalho () {


   return(
       <>
          <Head>
               <Image src={Logo} alt="SORVETERIA ICE CREAM" />
               <h1>Sorveteria IceLand</h1>
               <p>Keep calm and let it go</p>
          </Head>
       </>
)}