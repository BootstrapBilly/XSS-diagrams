import React from 'react'

//css
import classes from './Top_bar.module.css'

//components
import Vulnerability from "./Components/Vulnerability/Vulnerability"

//redux hooks
import { useSelector } from "react-redux"

export const Top_bar = () => {

    //?selectors
    const active_button = useSelector((state:any) => state.active_button.name)

    console.log(active_button)

    return (

        <div className={classes.container}>

            <div className={classes.button_container}>

                {[
                    ["Persisted XSS", "/"],
                    ["Reflected XSS", "reflected"],
                    ["Dom-based XSS", "dom-based"],
                    ["Database injection", "database"]

                ].map(vulnerability =>

                    <Vulnerability text={vulnerability[0]} highlighted={vulnerability[0] === active_button ? true : false} to={vulnerability[1]}

                    />)}

            </div>

        </div>

    )

}

export default Top_bar