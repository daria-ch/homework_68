import {FETCH_COUNTER_SUCCESS, FETCH_COUNTER_REQUEST} from "./actions.js";

const initialState = {
    counter: 0,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTER_SUCCESS:
            return {...state, counter: action.counter, loading: false};
        case FETCH_COUNTER_REQUEST:
            return {...state, loading: true};
        default:
            return state;
    }
};

export default reducer;