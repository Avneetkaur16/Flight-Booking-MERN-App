import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    loading: false,
    seats: 1,
    error: null
}

export const SeatsContext = createContext(INITIAL_STATE);

const SeatsReducer = (state, action) => {
    switch(action.type) {
        case "SEATS_START":
            return {
                loading: true,
                seats: 1,
                error: null
            }

        case "SEATS_SUCCESS":
            return {
                loading: false,
                seats: action.payload,
                error: null
            }

        case "SEATS_FAILURE":
            return {
                loading: false,
                seats: 1,
                error: action.payload
            }

        default:
            return state
    }
}

export const SeatsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SeatsReducer, INITIAL_STATE);

    return (
        <SeatsContext.Provider value={{ seatsDispatch: dispatch, seats: state.seats }}>
            { children }
        </SeatsContext.Provider>
    )
}