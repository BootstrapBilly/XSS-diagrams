import React from 'react';

//css
import classes from './App.module.css';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//functions
import get_variables from "./Util/generate_top_bar_variables"

//routes
import Persisted from "./Views/Persisted/Persisted"

//components
import TopBar from "./Shared components/Top_bar/Top_bar"

const App = () => {

  return (

    <BrowserRouter>

      <div className={classes.container}>

        <TopBar active={get_variables()[0]} />

        {window.innerWidth < 1000 ? "This app only works on laptops or desktop sorry" : //if its not a laptop or desktop, display a message and not the app

        <Switch>

          <Route path="/" exact component={Persisted} />

        </Switch>}

      </div>

    </BrowserRouter>


  )

}

export default App;
