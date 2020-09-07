import { nav_button_actions } from "../Actions/0_active_nav_button_action"

const initialState = {//set the initial state

    name: "Persisted XSS"

}

const active_button_reducer = (state = initialState, action: any) => {

    switch (action.type) {

        case nav_button_actions.SET_ACTIVE_BUTTON: return { name: action.payload }

        default: return state;
    }

}

export default active_button_reducer
