import axiosOrders from "../axios-orders";

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';


export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST};
};

export const fetchCounterSuccess = (counter) => {
    return {type: FETCH_COUNTER_SUCCESS, counter};
};

export const fetchCounterError = (error) => {
    return {type: FETCH_COUNTER_ERROR, error};
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