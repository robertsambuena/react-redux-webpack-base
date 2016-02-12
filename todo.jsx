import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
    // lifecycle
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
            text: ''
        }

        console.log("this.state", this.state);
        this.props.list.push('nice');
        console.log("prop", props);

    }

    componentDidMount() {
        console.log('componentDidMount state', this.state);
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount state', this.state);
        clearInterval(this.interval);
    }

    handleSubmitTodo(e) {
        e.preventDefault();
        console.log("this", this);
        const text = this.state.text;
        if (!text) {
            return;
        }

        this.props.list.push(text);

        this.setState({
            text: ''
        })

        this.state.text
    }

    handleInputChange(e) {
        this.setState({
            text: e.target.values
        });
    }

    // methods
    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    // compile
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.handleSubmitTodo(e)}>
                    <h1>TODO SIR</h1>
                    <input type="text" value={this.state.text} onChange={(e)=>this.handleInputChange(e)} />
                    <button type="submit">Add</button>
                </form>
                <h4>{this.state.seconds} - {this.state.text}</h4>
                <div>
                    <ul>
                        <li>123</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoApp;
