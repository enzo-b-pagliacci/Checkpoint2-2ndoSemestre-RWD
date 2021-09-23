import React from 'react'
import {DivRodaSor, TexRodSor, SorImg} from '../../styled'
import ImgSor from '../img/sorveteria.png'

export default function Rodape () {

   return(
       <>

            <DivRodaSor>
                 <SorImg src={ImgSor} />
                 <TexRodSor>Avenida Lins de Vasconcelos, 234</TexRodSor>
                 <SorImg src={ImgSor} />   
            </DivRodaSor>
       </>
)}