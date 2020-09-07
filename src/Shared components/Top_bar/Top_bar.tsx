import React from 'react'

//css
import classes from './Top_bar.module.css'

//components
import Text from "../Text/Text"

type props = {

    title: string
}

export const Top_bar = ({ title }: props) => {

    return (

        <div className={classes.container}>

            <Text text={title} mt={10} size={30} />

        </div>

    )

}

export default Top_bar