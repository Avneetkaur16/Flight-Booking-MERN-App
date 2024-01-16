import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    loading: false,
    flight: {},
    error: null
}

export const SelectedFlightContext = createContext(INITIAL_STATE);

const SelectedFlightReducer = (state, action) => {
    switch(action.type) {
        case "FLIGHT_START":
            return {
                loading: true,
                flight: {},
                error: null
            };

        case "FLIGHT_SUCCESS":
            return {
                loading: false,
                flight: action.payload,
                error: null
            };

        case "FLIGHT_ERROR":
            return {
                loading: false,
                flight: {},
                error: action.payload
            };

        default:
            return state
    }
}

export const SelectedFlightProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SelectedFlightReducer, INITIAL_STATE)
    return (
        <SelectedFlightContext.Provider value={{ selectedDispatch: dispatch, selectedFlight: state.flight }}>
            { children }
        </SelectedFlightContext.Provider>
    )
}