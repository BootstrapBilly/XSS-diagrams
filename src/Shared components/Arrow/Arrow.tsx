import React from 'react'

//css
import classes from './Arrow.module.css'

//assets
import arrow from "../../Assets/Graphics/arrow.svg"
import script from "../../Assets/Graphics/script.svg"

type props = {

    with_script?: boolean//determine whether to show a script underneath the arrow

}

const Arrow = ({ with_script }: props) => {

    return (

        <div className={classes.container}>
            
            <img src={arrow} alt="An arrow pointing to the next graphic" className={classes.arrow} />

            {with_script && <img src={script} alt="An arrow pointing to the next graphic" className={classes.script} />}

        </div>

    )

}

export default Arrow
