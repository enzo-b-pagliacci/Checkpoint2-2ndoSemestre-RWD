import React from 'react'
import { DisplayColecoes, TopCardImg, BodyCard, CardFeminino, BotaoCompra } from '../../../styled'
import PecaFem1 from '../../img/PecaFem1.png'
import PecaFem2 from '../../img/PecaFem2.png'
import PecaFem3 from '../../img/PecaFem3.png'
import PecaFem4 from '../../img/PecaFem4.png'

export default function ModaFeminina() {

   return(
      <>
      <DisplayColecoes>
            <CardFeminino>
               <TopCardImg src={PecaFem1} alt="PecaFem1" />
               <BodyCard>
                  <h2>Icon – Branco e Vermelho</h2>
                  <p>tamanhos: P, M, G, GG, XG, XXG</p>
                  <BotaoCompra>Comprar agora</BotaoCompra>
               </BodyCard>
            </CardFeminino>

            <CardFeminino>
               <TopCardImg src={PecaFem2} alt="PecaFem2" />
               <BodyCard>
                  <h2>Camiseta Longa Back-to-Back- Branco</h2>
                  <p>tamanhos: P, M, G, GG, XG, XXG</p>
                  <BotaoCompra>Comprar agora</BotaoCompra>
               </BodyCard>
            </CardFeminino>
         </DisplayColecoes>
         <DisplayColecoes>
            <CardFeminino>
               <TopCardImg src={PecaFem3} alt="PecaFem3" />
               <BodyCard>
                  <h2>Camiseta Longa No Love – Preto</h2>
                  <p>tamanhos: P, M, G, GG, XG, XXG</p>
                  <BotaoCompra>Comprar agora</BotaoCompra>
               </BodyCard>
            </CardFeminino>

            <CardFeminino>
               <TopCardImg src={PecaFem4} alt="PecaFem4" />
               <BodyCard>
                  <h2>Camiseta Longa Bad Choice – Branco</h2>
                  <p>tamanhos: P, M, G, GG, XG, XXG</p>
                  <BotaoCompra>Comprar agora</BotaoCompra>
               </BodyCard>
            </CardFeminino>
         </DisplayColecoes>
      </>
)}