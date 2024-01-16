import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    loading: false,
    flights: [],
    error: null
}

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch(action.type) {
        case "SEARCH_START":
            return {
                loading: true,
                flights: [],
                error: null
            };

        case "SEARCH_SUCCESS":
            return {
                loading: false,
                flights: action.payload,
                error: null
            };

        case "SEARCH_FAILURE":
            return {
                loading: false,
                flights: [],
                error: action.payload
            };
    }
}

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider value={{ searchDispatch: dispatch, flights: state.flights }}>
            { children }
        </SearchContext.Provider>
    )
}