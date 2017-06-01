import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function App(props) {
    return(
        <div><h1>Hola Mundo {props.myProp}</h1></div>
    )
}

ReactDOM.render(
    <App myProp = ' en React'/>,
    document.querySelector('.container')
)