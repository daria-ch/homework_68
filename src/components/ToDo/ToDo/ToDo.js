import React, {Component} from 'react';
import './ToDo.css';

class ToDo extends Component {

    render() {
        return (
            <div className='task'>
                <input className='list' type="text" value={this.props.title} readOnly/>
                <button className='delete' onClick={this.props.remove}>X</button>
            </div>
        );
    }
}

export default ToDo;