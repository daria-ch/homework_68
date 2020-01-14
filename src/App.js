import React, {Fragment} from 'react';
import Counter from "./containers/Counter/Counter";
import ToDoApp from "./containers/ToDoApp/ToDoApp";

function App() {
    return (
        <Fragment>
            <Counter/>
            <ToDoApp/>
        </Fragment>
    )
}

export default App;
