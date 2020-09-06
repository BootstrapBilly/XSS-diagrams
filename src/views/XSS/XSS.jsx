
import React from 'react'

//css
import classes from './XSS.module.css'

//components
import Text from "../../Shared components/Text/Text"
import Section from "./Components/Section/Section"



const XSS = () => {

    return (

        <div className={classes.container}>

            <Text text={"Cross Site Scripting explained"} mt={10} size={30} />

            <section className={classes.side_scroll_container}>

                <div className={classes.inner_container}>

                    <Section laptop_margin_left="1010" desktop_margin_left="1010" title="Step One : The attacker gets a malicious script" graphic_1_src="hacker" graphic_2_src="script"/>

                    <Section laptop_margin_left="1810" desktop_margin_left="1610" title="Step Two : They visit your website and find a place which accepts user input" graphic_1_src="website" graphic_2_src="form"/>

                </div>

            </section>




        </div>

    )

}

export default XSS