import React from "react";
import {Footer1, Menu, LogoPai, LogoSt, MenulinksRoda, MenuItensRoda, Contato} from '../../styled'
import {Link} from 'react-router-dom'
import Logo from '../img/logo.png'

export default function Footer(){

return(
<Footer1>
    <Menu>
        <LogoPai>
            <LogoSt src={Logo} alt="" />
        </LogoPai>
        <MenulinksRoda>
            <MenuItensRoda>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/modaMasculina">Moda masculina</Link></li>
                <li><Link to="/modaFeminina">Moda feminina</Link></li>
                <li><Link to="/modaInfantil">Moda infantil</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </MenuItensRoda>
        </MenulinksRoda>
        <Contato>
            <p>sac@cuervosupply.com.br</p>
            <p>Whatsapp: 11989432311 (Roger)</p>
        </Contato>
    </Menu>

</Footer1>
)
}