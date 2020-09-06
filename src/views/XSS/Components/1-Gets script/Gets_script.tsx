import React from 'react'

import classes from './Gets_script.module.css'

//components
import Text from "../../../../Shared components/Text/Text"
import Graphic from "../../../../Shared components/Graphic/Graphic"
import Arrow from "../../../../Shared components/Arrow/Arrow"

const Gets_script = () => {

    return (

        <div className={classes.container}>

            <Text text={"Step One : The attacker gets a malicious script"} mt={10} size={24} color={"grey"} />

            <div className={classes.inner_container}>

                <Graphic src="hacker" />
                <Arrow />
                <Graphic src="script" />

            </div>

        </div>

    )
}

export default Gets_script