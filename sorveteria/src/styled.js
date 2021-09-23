import styled from 'styled-components';

export const DivTudo = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
font-family:  'Lobster', cursive;
background: rgb(160,239,255);
background: linear-gradient(0deg, rgba(160,239,255,1) 0%, rgba(45,70,253,1) 60%);
`
export const DivCabe = styled.div `
text-align: center;
`
export const TituloIce = styled.h1`
color: #aeaeff;
font-size: 3em;
padding-top: 25px;
 `
export const Text = styled.p `
color: #fff;
font-size: 1.4em;
padding-bottom: 1em;
`

export const DivRodaSor = styled.div`
@media screen and (min-width: 1201px) {
background: linear-gradient(0deg, rgba(45,70,253,1) 0% ,rgba(160,239,255,1) 60%);
display: flex;
align-items: center;
justify-content:center;
/* margin-top: 19%; */
position:fixed;
bottom: 0;
left:0;
}


@media screen and (max-width: 1200px) and (min-width: 710px) {
    background: linear-gradient(0deg, rgba(45,70,253,1) 0% ,rgba(160,239,255,1) 60%);
display: flex;
align-items: center;
justify-content:center;
margin-top: 1%;
}
@media screen and (max-width: 709px) {
    background: linear-gradient(0deg, rgba(45,70,253,1) 0% ,rgba(160,239,255,1) 60%);
display: flex;
align-items: center;
justify-content:center;
margin-top: 10%;
}

`
export const TexRodSor = styled.p`
color:#000;
font-size: 2em;
text-align: center;
`

export const SorImg = styled.img`
@media screen and (min-width: 1201px) {
   width:5%;
   display:flex;
   justify-content:center;
}

@media screen and (max-width: 1200px) and (min-width: 710px) {
 width:5%;
 display: flex; 
 justify-content: center;
}
@media screen and (max-width: 709px) {
width:10%;
display: flex;
justify-content: center;
}

`
