
import React from 'react'

//css
import classes from './Dom_based.module.css'

//components
import Section from "../../Shared components/Section/Section"

const Reflected = () => {

    return (

        <div className={classes.container}>

            <section className={classes.side_scroll_container}>

                <div className={classes.inner_container}>

                    <Section

                        margin_left="1010"
                        title="Step One : The attacker gets a malicious script"
                        graphic_1_src="hacker"
                        graphic_2_src="script"

                    />

                    <Section

                        margin_left="1810"
                        title="Step Two : They trick you into clicking a link"
                        graphic_1_src="email"
                        graphic_2_src="user"

                    />

                    <Section

                        margin_left="2610"
                        title="Step Three : The link takes you to a website, and directly injects the script into the client"
                        graphic_1_src="user"
                        graphic_2_src="website"
                        with_script

                    />

                    <Section

                        margin_left="3310"
                        title="Step Four : The script is given to you from the browser/website, no server needed"
                        graphic_1_src="website"
                        graphic_2_src="user"
                        with_script

                    />

                    <Section

                        margin_left="3960"
                        title="Step Five : The script is run on your computer, stealing your data"
                        graphic_1_src="script"
                        graphic_2_src="user"

                    />

                </div>

            </section>




        </div>

    )

}

export default Reflected