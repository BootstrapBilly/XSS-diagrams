import React from 'react'

//css
import classes from './Arrow.module.css'

//assets
import arrow from "../../Assets/Graphics/arrow.svg"
import script from "../../Assets/Graphics/script.svg"
import credit_card from "../../Assets/Graphics/credit-card.svg"

type props = {

    with_script?: boolean//determine whether to show a script underneath the arrow
    with_credit_card?:boolean//determine whether the arrow has a credit card above it

}

const Arrow = ({ with_script, with_credit_card }: props) => {

    return (

        <div className={classes.container}>

            <img src={arrow} alt="An arrow pointing to the next graphic" className={classes.arrow} />

            {with_script && <img src={script} alt="An malicious script being transferred" className={classes.additional} />}
            {with_credit_card && <img src={credit_card} alt="Credit card data being transfered" className={classes.additional} />}

        </div>

    )

}

export default Arrow
