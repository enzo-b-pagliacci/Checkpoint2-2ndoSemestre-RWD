import React from 'react'
import {DivCabe, Text, TituloIce} from '../../styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream } from '@fortawesome/free-solid-svg-icons'
export default function Cabecalho () {


   return(
       <>
       <div style={{backgroundColor: '#f28d11'}}>
            <DivCabe>                   
                  <TituloIce><FontAwesomeIcon style={{color: 'white', fontSize:'40px'}}icon={faIceCream} />   Sorveteria IceLand</TituloIce>    
            </DivCabe>
            <div style={{textAlign: 'center'}}>       
               <Text>Keep calm and let it go</Text>
            </div>
         </div>
         
       </>
)}