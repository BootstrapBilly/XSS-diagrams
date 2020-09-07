
import React from 'react'

//css
import classes from './Database.module.css'

//components
import Section from "../../Shared components/Section/Section"

const Persisted = () => {

    return (

        <div className={classes.container}>

            <section className={classes.side_scroll_container}>

                <div className={classes.inner_container}>

                    <Section

                        margin_left="1010"
                        title="Step One : The attacker writes some database queries"
                        graphic_1_src="hacker"
                        graphic_2_src="db-code"

                    />

                    <Section

                        margin_left="1810"
                        title="Step Two : They visit your website and find a place which accepts user input"
                        graphic_1_src="website"
                        graphic_2_src="form"

                    />

                    <Section

                        margin_left="2610"
                        title="Step Three : They insert their database query into the form and submit it"
                        graphic_1_src="db-code"
                        graphic_2_src="form"
                        with_script

                    />

                    <Section

                        margin_left="3210"
                        title="Step Four : The form submits the data to the server (with the database query)"
                        graphic_1_src="form"
                        graphic_2_src="server"
                        with_script

                    />

                    <Section

                        margin_left="3810"
                        title="Step Five : The server submits the query to the database -> Read credit card data"
                        graphic_1_src="server"
                        graphic_2_src="database"
                        with_script

                    />

                    <Section

                        margin_left="4410"
                        title="Step Six : The database runs the query and returns the credit card data to the server"
                        graphic_1_src="database"
                        graphic_2_src="server"
                        with_credit_card

                    />

                    <Section

                        margin_left="5110"
                        title="Step Seven : The server returns the data (with credit card info) back to the user"
                        graphic_1_src="server"
                        graphic_2_src="hacker"
                        with_credit_card

                    />

                </div>

            </section>




        </div>

    )

}

export default Persisted