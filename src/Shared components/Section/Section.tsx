import React from 'react'

import classes from './Section.module.css'

//components
import Text from "../../Shared components/Text/Text"
import Graphic from "../../Shared components/Graphic/Graphic"
import Arrow from "../../Shared components/Arrow/Arrow"

type props = {

    margin_left?: string//margin left for laptop screens

    title:string//title of the section

    graphic_1_src:string//first picture source - ("hacker") - dont put the full path, only image name
    graphic_2_src:string//second picture source

    with_script?:boolean//determine whether the arrow has a script above it
    with_credit_card?:boolean//determine whether the arrow has a credit card above it

}

const Gets_script = ({ margin_left, title, graphic_1_src, graphic_2_src, with_script, with_credit_card }: props) => {

    const style = {

        top: `${margin_left}px`

    }

    return (

        <div className={classes.container} style={style} >

            <Text text={title} mt={10} size={24} color={"grey"} />

            <div className={classes.inner_container}>

                <Graphic src={graphic_1_src} />

                <Arrow with_script={with_script} with_credit_card={with_credit_card}/>

                <Graphic src={graphic_2_src} />

            </div>

        </div>

    )
}

export default Gets_script