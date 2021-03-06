import React from 'react'
import {Link} from 'react-router-dom'
import { Menu, LogoPai, LogoSt, MenuItens, Menulinks } from '../../styled'
import Logo from '../img/logo.png'


export default function Header() {

return(
<header>
    <Menu>
        <LogoPai>
            <LogoSt src={Logo} alt="" />
        </LogoPai>
        <Menulinks>
            <MenuItens>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/modaMasculina">Moda masculina</Link></li>
                <li><Link to="/modaFeminina">Moda feminina</Link></li>
                <li><Link to="/modaInfantil">Moda infantil</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </MenuItens>
        </Menulinks>
    </Menu>
</header>
)}