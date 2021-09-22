import React from 'react'
import {Link} from 'react-router-dom'
import { Menu, LogoPai, LogoSt, MenuItens } from '../../styled'
import Logo from '../img/logo.png'

export default function Header() {

return(
<header>
    <Menu>
        <displayMenu>
            <LogoPai>
                <LogoSt src={Logo} alt="" />
            </LogoPai>
            <div>
                <MenuItens>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/modaMasculina">Moda masculina</Link></li>
                    <li><Link to="/">Moda feminina</Link></li>
                    <li><Link to="/">Moda infantil</Link></li>
                    <li><Link to="/">Sobre</Link></li>
                </MenuItens>
            </div>
        </displayMenu>
    </Menu>
</header>
)}