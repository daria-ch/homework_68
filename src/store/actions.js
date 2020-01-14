import axiosOrders from "../axios-orders";

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';

export const GET_TEXT = 'GET_TEXT';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};
export const fetchCounterSuccess = (counter) => {
    return {type: FETCH_COUNTER_SUCCESS, counter};
};
export const fetchCounterError = (error) => {
    return {type: FETCH_COUNTER_ERROR, error};
};


export const fetchListRequest = () => {
    return {type: FETCH_LIST_REQUEST};
};
export const fetchListSuccess = (list) => {
    return {type: FETCH_LIST_SUCCESS, list};
};
export const fetchListError = (error) => {
    return {type: FETCH_LIST_ERROR, error};
};


export const getText = (value) => {
    return {type: GET_TEXT, value};
};
export const fetchAddTask = (task) => {
    return {type: ADD_TASK, task};
};
export const fetchRemoveTask = (id) => {
    return {type: REMOVE_TASK, id};
};


export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axiosOrders.get('/counter.json').then(response => {
            dispatch(fetchCounterSuccess(response.data));
        }, error => {
            dispatch(fetchCounterError(error))
        });
    }
};

export const incrementCounter = (number) => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axiosOrders.put('/counter.json', number + 1).then(response => {
            dispatch(fetchCounterSuccess(response.data));
        }, error => {
            dispatch(fetchCounterError(error))
        });
    }
};

export const decrementCounter = (number) => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axiosOrders.put('/counter.json', number - 1).then(response => {
            dispatch(fetchCounterSuccess(response.data));
        }, error => {
            dispatch(fetchCounterError(error))
        });
    }
};

export const addCounter = (number) => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axiosOrders.put('/counter.json', number + 5).then(response => {
            dispatch(fetchCounterSuccess(response.data));
        }, error => {
            dispatch(fetchCounterError(error))
        });
    }
};

export const subtractCounter = (number) => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axiosOrders.put('/counter.json', number - 5).then(response => {
            dispatch(fetchCounterSuccess(response.data));
        }, error => {
            dispatch(fetchCounterError(error))
        });
    }
};


export const fetchList = () => {
    return dispatch => {
        dispatch(fetchListRequest());
        axiosOrders.get('/list.json').then(response => {
            dispatch(fetchListSuccess(response.data));
        }, error => {
            dispatch(fetchListError(error));
        });
    }
};

export const addTask = (event, task) => {
    event.preventDefault();
    return dispatch => {
        dispatch(fetchListRequest());
        axiosOrders.post('/list.json', task).then(response => {
            dispatch(fetchAddTask(response.data));
        }, error => {
            dispatch(fetchListError(error));
        });
    }
};

export const removeTask = (event, id) => {
    event.preventDefault();
    return dispatch => {
        dispatch(fetchListRequest());
        axiosOrders.delete('/list/' + id + '.json').then(response => {
            dispatch(fetchRemoveTask(response.data));
        }, error => {
            dispatch(fetchListError(error));
        });
    }
};