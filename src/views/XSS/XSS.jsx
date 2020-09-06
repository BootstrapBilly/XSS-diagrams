
import React from 'react'

//css
import classes from './XSS.module.css'

//components
import Text from "../../Shared components/Text/Text"
import Script from "./Components/1-Gets script/Gets_script"


const XSS = () => {

    return (

        <div className={classes.container}>

            <Text text={"Cross Site Scripting explained"} mt={10} size={30} />
            <Text text={"Current step : The attacker gets a malicious script"} mt={10} size={24} color={"grey"} />

            <section className={classes.side_scroll_container}>

                <div className={classes.inner_container}>

                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />
                    <Script />

                </div>

            </section>




        </div>

    )

}

export default XSS