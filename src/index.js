import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><h1>Hola Mundo {this.props.myProp}</h1></div>
        )
    }
}

ReactDOM.render(
    <App myProp = ' en React'/>,
    document.querySelector('.container')
)