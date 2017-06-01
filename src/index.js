import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ' con estado'
        }


        window.setInterval(() => {
            this.setState({
                text: new Date().toLocaleTimeString()
            });
        }, 1000);
    }
 
    render() {
        return (
            <div><h1>Hola Mundo {this.props.myProp} {this.state.text}</h1></div>
        )
    }
}

ReactDOM.render(
    <App myProp = ' en React'/>,
    document.querySelector('.container')
)