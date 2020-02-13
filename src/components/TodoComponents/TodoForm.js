import React, {Component} from 'react' 


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todo1: ""
        };
    }

    handleChanges = e => {
        this.setState({ todo1: e.target.value})
    }

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.todo1);
    }

    render() {
        console.log("rendering form", this.state.task);
        return (
            <form onSubmit={this.submitTask}>
                <input type="text" name="task" onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm