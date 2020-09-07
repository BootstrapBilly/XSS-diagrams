
import React from 'react'

//css
import classes from './Persisted.module.css'

//components
import Section from "../../Shared components/Section/Section"

const Persisted = () => {

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
                        title="Step Two : They visit your website and find a place which accepts user input"
                        graphic_1_src="website"
                        graphic_2_src="form"

                    />

                    <Section

                        margin_left="2610"
                        title="Step Three : They insert their script into the form and submit it"
                        graphic_1_src="script"
                        graphic_2_src="form"
                        with_script

                    />

                    <Section

                        margin_left="3210"
                        title="Step Four : The form submits the data to the server (with the malicious script)"
                        graphic_1_src="form"
                        graphic_2_src="server"
                        with_script

                    />

                    <Section

                        margin_left="3810"
                        title="Step Five : The server saves the data (with the malicious script) inside the database"
                        graphic_1_src="server"
                        graphic_2_src="database"
                        with_script

                    />

                    <Section

                        margin_left="4410"
                        title="Step Six : An innocent user visits your website, requests are made to the server"
                        graphic_1_src="shopper"
                        graphic_2_src="server"

                    />

                    <Section

                        margin_left="5010"
                        title="Step Seven : The server requests the data from the database"
                        graphic_1_src="server"
                        graphic_2_src="database"

                    />

                    <Section

                        margin_left="5610"
                        title="Step Eight : The database returns the data, including the hacker's malicious script"
                        graphic_1_src="database"
                        graphic_2_src="server"
                        with_script

                    />

                    <Section

                        margin_left="6210"
                        title="Step Nine : The data, along with the malcious script is sent to the user"
                        graphic_1_src="server"
                        graphic_2_src="shopper"
                        with_script

                    />

                    <Section

                        margin_left="6810"
                        title="Step Ten : The script is run on their computer, stealing their data"
                        graphic_1_src="script"
                        graphic_2_src="shopper"

                    />

                </div>

            </section>




        </div>

    )

}

export default Persisted