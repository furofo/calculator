import React from 'react';
import ReactDom from 'react-dom';
import {render} from 'react-dom';
import './style.css';
import $ from "jquery";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux';


//React Logic

class Calculator extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className= "positioning-container">
        <div className = "calculator">
            <div id = "display">
                <p className = "display-text"> This is Display Text</p>
            </div>
            <div id = "display">
                <p className = "display-text"> This is Display Text</p>
            </div>
            <div id = 'buttons'>
                <button id = 'AC'>AC</button>
                <button id = 'divide'>X</button>
                <button id = 'multiply'>/</button>
                
                <button id = 'seven'>7</button>
                <button id = 'eight'>7</button>
                <button id = 'nine'>7</button>
                <button id = 'subtract'>-</button>

                <button id = 'four'>4</button>
                <button id = 'five'>5</button>
                <button id = 'six'>6</button>
                <button id = 'add'>+</button>

                <button id = 'one'>1</button>
                <button id = 'two'>2</button>
                <button id = 'three'>3</button>

                <button id = "equals">=</button>

                <button id = "zero">0</button>
                <button id = 'period'>.</button>

            </div>
        </div>
        </div>
        )
    }
}


ReactDom.render(<Calculator />, document.getElementById('root'));