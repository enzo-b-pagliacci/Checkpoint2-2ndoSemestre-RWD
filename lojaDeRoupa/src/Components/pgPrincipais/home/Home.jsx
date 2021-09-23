import React from 'react'
import ImgHome from '../../img/imgHome.png'
import {Img1Home, DisplayColecoes, Card, TopCardImg, BodyCard, SobreNosDisplay} from '../../../styled'
import ImgMasculina from '../../img/modaMasculina.jpg'
import TechKid from '../../img/techKid.jpg'
import TechWoman from '../../img/techMulh.jpg'

export default function Home() {

return(
<>
   <div>
      <Img1Home src={ImgHome} alt="imgcoleção" />
   </div>

   <DisplayColecoes>
      <Card>
         <TopCardImg src={ImgMasculina} alt="moda masc" />
         <BodyCard>
            <h2>Moda Masculina</h2>
            <p>A melhor coleção de roupas estilo Techwear para homens</p>
         </BodyCard>

      </Card>

      <Card>
         <TopCardImg src={TechWoman}></TopCardImg>
         <BodyCard>
            <h2>Moda Feminina</h2>
            <p>A melhor coleção de roupas estilo Techwear para mulheres</p>
         </BodyCard>
      </Card>

      <Card>
         <TopCardImg src={TechKid}></TopCardImg>
         <BodyCard>
            <h2>Moda Infantil</h2>
            <p>A melhor coleção de roupas estilo Techwear para crianças</p>
         </BodyCard>

      </Card>


   </DisplayColecoes>

   <div>

      <SobreNosDisplay>
         <h2>Sobre nós</h2>
         <p>Desde o começo de nossa jornada, acreditamos que, apesar de todos nós termos gostos diferentes uns dos
            outros, compartilhamos dos mesmos interesses em várias áreas. E é esse conjunto de interesses compartilhados
            que nos tornam únicos.</p>
         <p>A Cuervo foi criada pensando em tornar a sua experiência com vestuário mais simples e confiável, da maneira
            como deveria ser. E essa vontade fez com que criássemos uma maneira incrível de tornar isso possível: nossa
            loja online.</p>
         <p>Com fortes influências de culturas diferentes das nossas, como a Chinesa e Japonesa, percebemos que
            independente de qual seja seu gosto para roupas… Nós buscamos pessoas com gostos parecidos aos nossos. Nós
            formamos bandos.</p>
         <p>Toda a identidade da Cuervo foi desenvolvida com dois propósitos que, para nós, são bem claros e
            inegociáveis: surpreender nosso cliente e oferecer uma experiência de compra e com o produto única.</p>
      </SobreNosDisplay>

   </div>
</>
)}