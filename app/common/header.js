import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    // lifecycle
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {}

    componentWillUnmount() {}

    // compile
    render() {
        return (
            <div>
                HEADER
            </div>
        )
    }
}

export default Header;
