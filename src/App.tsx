import React from 'react';

//css
import classes from './App.module.css';

//external
import { BrowserRouter, Switch, Route } from "react-router-dom"

//functions
import get_title from "./Util/generate_top_bar_title"

//routes
import XSS from "./views/XSS/XSS"

//components
import TopBar from "./Shared components/Top_bar/Top_bar"

const App = () => {

  get_title()

  return (

    <BrowserRouter>

      <div className={classes.container}>

        <TopBar title={get_title()} />

        {window.innerWidth < 1000 ? "This app only works on laptops or desktop sorry" : //if its not a laptop or desktop, display a message and not the app

        <Switch>

          <Route path="/" exact component={XSS} />

        </Switch>}

      </div>

    </BrowserRouter>


  )

}

export default App;
