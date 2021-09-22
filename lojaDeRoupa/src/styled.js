import styled from 'styled-components'

export const ElHtml = styled.html`
    font-family:  'Arial', 'Helvetica', 'sans-serif';
    a{
        text-decoration: none;
        color: black;
    }
   
`
export const oBody = styled.body`
    margin: 0;
    padding: 0;
    
`

export const Menu = styled.nav`
    width: 100%;
    background-color: #b1b2b2;
`

export const LogoSt = styled.img`
    height: 100%;
    width: 100%;
`

export const LogoPai = styled.div`
    width: 6%;
    margin-left: 3%;
`

export const displayMenu = styled.div`
    display: flex;
    justify-content: space-between;
`
export const MenuItens = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
`