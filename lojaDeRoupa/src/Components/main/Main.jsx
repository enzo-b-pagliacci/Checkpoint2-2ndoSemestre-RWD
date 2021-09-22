import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from '../header/Header'
import Home from '../pgPrincipais/home/Home'


export default function Main() {

   return(
      <>
      <Header/>
      <Switch>
        <Route exact path="/">
            <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home}/>
        {/* <Route path="/modaMasculina" component={ModaMasculina} /> importar o moda masculina */}
      </Switch>

      {/* rodapé  */}
      </>
)}