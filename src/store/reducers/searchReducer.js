// src/redux/searchReducer.js
import { SET_SEARCH_QUERY, SET_SEARCH_RESULTS } from '../actions/searchActions'; // Adjust the path based on your folder structure

const initialState = {
    query: '',
    results: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                query: action.payload,
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;
