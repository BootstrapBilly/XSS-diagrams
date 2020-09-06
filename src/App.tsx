import React from 'react';

//css
import classes from './App.module.css';

//routes
import XSS from "./views/XSS/XSS"

const App = () => {

  return (

    <div className={classes.container}>

      <XSS />

    </div>

  )

}

export default App;
