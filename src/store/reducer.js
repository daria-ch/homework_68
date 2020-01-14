import {
    FETCH_COUNTER_SUCCESS,
    FETCH_COUNTER_REQUEST,
    FETCH_LIST_SUCCESS,
    GET_TEXT,
    ADD_TASK,
    REMOVE_TASK
} from "./actions.js";

const initialState = {
    counter: 0,
    text: '',
    list: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTER_SUCCESS:
            return {...state, counter: action.counter, loading: false};
        case FETCH_COUNTER_REQUEST:
            return {...state, loading: true};
        case FETCH_LIST_SUCCESS:
            return {...state, list: action.list};
        case GET_TEXT:
            return {...state, text: action.value};
        case ADD_TASK:
            return {...state, text: '', list: state.list};
        case REMOVE_TASK:
            return {...state, list: state.list};
        default:
            return state;
    }
};

export default reducer;