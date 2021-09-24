import styled from 'styled-components'

export const ElHtml = styled.html`
    font-family:  'Arial', 'Helvetica', 'sans-serif';
    a{
        text-decoration: none;
        color: black;
    }
    a:hover {
        color: #ee081e;
    }
   
`


export const Menu = styled.nav`
    width: 100%;
    background: rgb(216,215,215);
background: linear-gradient(0deg, rgba(216,215,215,1) 0%, rgba(177,178,178,1) 100%);
    display: flex;
    flex-direction: row;
`

export const LogoSt = styled.img`
    height: 100%;
    width: 30%;
`

export const LogoPai = styled.div`
    margin-left: 3%;
    margin-right: 0;
    flex-grow: 1;
    
`

export const MenuItens = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3%;
    list-style: none;
    li{
        font-size: 20px;
    }
    
`

export const MenuItensRoda = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    margin-top: 3%;
    list-style: none;
    li{
        font-size: 20px;
    }
    
`

export const Footer1 = styled.footer`
   background: rgb(216,215,215);
    background: linear-gradient(0deg, rgba(216,215,215,1) 0%, rgba(178,179,179,1) 100%);
    
`

export const Menulinks = styled.div`
    flex-grow: 3;
`
export const MenulinksRoda = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
`

export const Contato = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-right: 2%;
    padding-top: 1%;
`

export const Img1Home = styled.img`
    width: 100%;
    height: 100%;
`

export const DisplayColecoes = styled.div`
    display: flex;
    flex-direction: row;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #d8d7d7;
    border-radius: 10px;
    box-shadow: 9px 5px 25px -2px rgba(0,0,0,0.73);
    margin: 3%;
`

export const CardMasculino = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #d8d7d7;
    border-radius: 10px;
    box-shadow: 9px 5px 25px -2px rgba(0,0,0,0.73);
    margin: 3%;
`

export const CardFeminino = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #d8d7d7;
    border-radius: 10px;
    box-shadow: 9px 5px 25px -2px rgba(0,0,0,0.73);
    margin: 3%;
`

export const CardInfantil = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #d8d7d7;
    border-radius: 10px;
    box-shadow: 9px 5px 25px -2px rgba(0,0,0,0.73);
    margin: 3%;
`

export const TopCardImg = styled.img`
    width: 100%;
    height: 100%;
`



export const BodyCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
    text-align: center;
    
    h2{
        margin-bottom: 2%;
    }
    p{
        margin-left: 3%;
        margin-right: 3%;
    }
    font-size: 1em;
`



export const SobreNosDisplay = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 5%;
    h2{
        margin-bottom: 2%;
    }
    p{
        text-align: justify;
        margin-bottom: 1%;
    }
`

export const BotaoCompra = styled.button`
    background-color: #ee081e;
    border: 1px solid #ee081e;
    border-radius: 5px; 
    padding: 3%;
    margin-top: 5%;
    font-weight: bold;
`

