import React from 'react'
import { DisplayColecoes, TopCardImg, BodyCard, CardInfantil } from '../../../styled'
import PecaInfantil1 from '../../img/PecaInfantil1.png'
import PecaInfantil2 from '../../img/PecaInfantil2.png'

export default function ModaInfantil() {

   return(
      <>
      <DisplayColecoes>
            <CardInfantil>
               <TopCardImg src={PecaInfantil1} alt="PecaInfantil1" />
               <BodyCard>
                  <h2>calça infantil jogger de moletom com recortes preta</h2>
                  <p>tamanhos: 1, 2, 3, 4, 5</p>
               </BodyCard>
            </CardInfantil>

            <CardInfantil>
               <TopCardImg src={PecaInfantil2} alt="PecaInfantil2" />
               <BodyCard>
                  <h2>calça infantil jogger com bolsos preta</h2>
                  <p>tamanhos: 1, 2, 3, 4, 5</p>
               </BodyCard>
            </CardInfantil>
         </DisplayColecoes>
      </>
)}