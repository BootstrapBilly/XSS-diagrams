import React from 'react'

//css
import classes from './Arrow.module.css'

//assets
import arrow from "../../Assets/Graphics/arrow.svg"


const Arrow = () => {

    return (

        <img src={arrow} alt="An arrow pointing to the next graphic" className={classes.arrow} />

    )

}

export default Arrow
