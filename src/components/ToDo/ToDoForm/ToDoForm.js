import React from 'react';
import './ToDoForm.css';

const ToDoForm = props => {
    return (
        <form className='form'>
            <input type="text" className='taskTitle' required placeholder='Enter task title' autoComplete='off'
                   onChange={props.getText}/>
            <button type='submit' className='add' onClick={props.addToList}>Add</button>
        </form>
    );
};

export default ToDoForm;