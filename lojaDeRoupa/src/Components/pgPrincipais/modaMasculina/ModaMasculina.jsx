import React from 'react'
import { Img1Home, DisplayColecoes, TopCardImg, BodyCard, CardMasculino, } from '../../../styled'
import ImgMasculina from '../../img/modaMasculina.jpg'
import PecaMasc1 from '../../img/PecaMasc1.png'
import PecaMasc2 from '../../img/PecaMasc2.png'
import PecaMasc3 from '../../img/PecaMasc3.png'
import PecaMasc4 from '../../img/PecaMasc4.png'

export default function ModaMasculina() {

   return (
      <>
         <DisplayColecoes>
            <CardMasculino>
               <TopCardImg src={PecaMasc1} alt="PecaMasc1" />
               <BodyCard>
                  <h2>Camiseta Longa Neo-Tokyo – Branco</h2>
                  <p>tamanhos: P, M, G, GG, XG, XXG</p>
               </BodyCard>
            </CardMasculino>

            <CardMasculino>
               <TopCardImg src={PecaMasc2} alt="PecaMasc2" />
               <BodyCard>
                  <h2>Camiseta Longa Daring – Preto</h2>
                  <p>tamanhos: P, M, G, GG, XG, XXG</p>
               </BodyCard>
            </CardMasculino>
         </DisplayColecoes>
         <DisplayColecoes>
            <CardMasculino>
               <TopCardImg src={PecaMasc3} alt="PecaMasc3" />
               <BodyCard>
                  <h2>Camiseta Longa Pill – Akira</h2>
                  <p>tamanhos: P, M, G, GG, XG, XXG</p>
               </BodyCard>
            </CardMasculino>

            <CardMasculino>
               <TopCardImg src={PecaMasc4} alt="PecaMasc4" />
               <BodyCard>
                  <h2>Camiseta Longa Tech – Preto</h2>
                  <p>tamanhos: P, M, G, GG, XG, XXG</p>
               </BodyCard>
            </CardMasculino>
         </DisplayColecoes>
      </>
   )
}