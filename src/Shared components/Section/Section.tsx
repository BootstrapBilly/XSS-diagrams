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

}

const Gets_script = ({ margin_left, title, graphic_1_src, graphic_2_src }: props) => {

    const style = {

        top: `${margin_left}px`

    }

    return (

        <div className={classes.container} style={style} >

            <Text text={title} mt={10} size={24} color={"grey"} />

            <div className={classes.inner_container}>

                <Graphic src={graphic_1_src} />

                <Arrow />

                <Graphic src={graphic_2_src} />

            </div>

        </div>

    )
}

export default Gets_script