export enum nav_button_actions {

    SET_ACTIVE_BUTTON = "SET_ACTIVE_BUTTON"

}

export const set_active_buttons = (button_name:string) => {

    return async (dispatch:any) => {

        dispatch({ 

            type: nav_button_actions.SET_ACTIVE_BUTTON,//Type of dispatch, as declared at the top
            payload:button_name//send the type of the button name to the reducer

        })

    }

}
