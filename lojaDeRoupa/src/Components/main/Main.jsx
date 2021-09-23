import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from '../header/Header'
import Home from '../pgPrincipais/home/Home'
import ModaMasculina from '../pgPrincipais/modaMasculina/ModaMasculina'
import ModaFeminina from '../pgPrincipais/modaFeminina/ModaFeminina'
import ModaInfantil from '../pgPrincipais/modaInfantil/ModaInfantil'
import Sobre from '../pgPrincipais/sobre/Sobre'
import Footer from '../footer/Footer'
export default function Main() {

return(
<>
    <Header />
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/modaMasculina" component={ModaMasculina} />
      <Route path="/modaFeminina" component={ModaFeminina} />
      <Route path="/modaInfantil" component={ModaInfantil} />
      <Route path="/sobre" component={Sobre} />

    </Switch>
  <Footer />


</>
)}