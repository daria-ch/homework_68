import React, {Component} from 'react';
import ToDoForm from '../../components/ToDo/ToDoForm/ToDoForm';
import ToDo from "../../components/ToDo/ToDo/ToDo";
import {connect} from "react-redux";
import {addTask, fetchList, getText, removeTask} from "../../store/actions";

let text = null;

class ToDoApp extends Component {

    componentDidMount() {
        this.props.fetchList();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.list !== this.props.list || prevProps.text !== this.props.text) {
            this.props.fetchList();
        }
    }

    render() {
        text = {text: this.props.text};

        const toDoStyle = {
            border: '1px solid #000',
            maxWidth: "700px",
            margin: "20px auto",
            padding: '20px',
            height: '400px'
        };

        const textStyle = {
            textAlign: 'left',
            margin: '20px 0'
        };

        const list = Object.keys(this.props.list).map(task => {
            return (
                <ToDo
                    key={task}
                    title={this.props.list[task].text}
                    remove={(event) => this.props.removeTask(event, task)}
                    id={task}
                />
            )
        });

        return (
            <div className='ToDoApp' style={toDoStyle}>
                <ToDoForm
                    getText={this.props.getText}
                    addToList={this.props.addTask}
                />
                <div>
                    <p style={textStyle}>To do list:</p>
                    {list}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        text: state.text,
        list: state.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchList: () => dispatch(fetchList()),
        getText: (event) => dispatch(getText(event.target.value)),
        addTask: (event) => dispatch(addTask(event, text)),
        removeTask: (event, id) => dispatch(removeTask(event, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);