import React from 'react'
import classes from './Graphic.module.css'


//=types
type props = {

    src:string//source of the image

}

export const Graphic = ({src}:props) => {

    return (

        <div>

            <img src={require(`../../Assets/Graphics/${src}.svg`)} alt={src} className={classes.image}/>

        </div>

    )

}

export default Graphic
