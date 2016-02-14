import React from 'react';
import ReactDOM from 'react-dom';
import './todo.scss';

class TodoApp extends React.Component {
    // lifecycle
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
            text: ''
        }
    }

    componentDidMount() {}

    componentWillUnmount() {}

    // events
    handleSubmitTodo(e) {
        const text = this.state.text;

        e.preventDefault();

        if (!text) return;

        this.props.list.push(text);
        this.setState({
            text: ''
        });
    }

    handleInputChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    // compile
    render() {
        return (
            <div className="todo-app">
                <form onSubmit={(e)=>this.handleSubmitTodo(e)}>
                    <h1>TODO SIR</h1>
                    <input type="text" value={this.state.text} onChange={(e)=>this.handleInputChange(e)} />
                    <button type="submit">Add</button>
                </form>
                <h4 className="nicela">{this.state.seconds} - {this.state.text}</h4>
                <div>
                    <ul>
                        {this.props.list.map((object, i) =>
                            <li key={i}>{object}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoApp;
