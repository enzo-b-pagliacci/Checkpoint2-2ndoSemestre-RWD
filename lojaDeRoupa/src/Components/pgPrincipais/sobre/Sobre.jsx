import React from 'react'
import { DisplayColecoes, TopCardImg, BodyCard, CardMasculino, Card } from '../../../styled'
import Enzo from '../../img/enzo.jpg'
import Gu from '../../img/gu.jpg'
import Beck from '../../img/Beck.png'
import Dantas from '../../img/dantas.png'
import Jhow from '../../img/jhow.jpg'



export default function Sobre() {

   return(
      <>
      <DisplayColecoes>
            <Card>
               <TopCardImg src={Enzo} alt="Enzo" />
               <BodyCard>
                  <h2>Enzo Bense Pagliacci</h2>
                  
               </BodyCard>
            </Card>

            <Card>
               <TopCardImg src={Gu} alt="Gustavo" />
               <BodyCard>
                  <h2>Gustavo Lopes Carlim</h2>
                  
               </BodyCard>
            </Card>
         </DisplayColecoes>
         <DisplayColecoes>
            <Card>
               <TopCardImg src={Beck} alt="Beck" />
               <BodyCard>
                  <h2>Guilherme Beck Lobo</h2>
                  
               </BodyCard>
            </Card>

            <Card>
               <TopCardImg src={Jhow}  alt="Jhoctan" />
               <BodyCard>
                  <h2>Jhoctan Teixeira de Deus</h2>
                  
               </BodyCard>
            </Card>
         </DisplayColecoes>
         <DisplayColecoes>
            <Card>
               <TopCardImg src={Dantas} alt="Gabriel" />
               <BodyCard>
                  <h2>Gabriel Jesus Dantas</h2>
                  
               </BodyCard>
            </Card>
         </DisplayColecoes>
      </>
)}