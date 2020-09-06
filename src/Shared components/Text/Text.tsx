import React from 'react'

//css
import classes from './Text.module.css'

//=Types
type props = {

    text:string//text to be displayed
    mt:number//margin top
    size:number//font size
    color?:string//colour - optional

}

const Title = ({text, mt, size, color} : props ) => {

    const styles = {

        marginTop: `${mt}px`, //assign the given margin top to the element
        fontSize: `${size}px`, //assign the given font size to the element
        color:color || "black" //assign the given colour to the element

    }

    return (

        <div className={classes.container} style={styles}>
            
            {text}

        </div>

    )

}

export default Title