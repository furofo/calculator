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
            <div id = 'buttons' class = 'grid-container'>
                <a id = 'AC'>AC</a>
                <a id = 'divide'>X</a>
                <a id = 'multiply'>/</a>
                
                <a id = 'seven'>7</a>
                <a id = 'eight'>7</a>
                <a id = 'nine'>7</a>
                <a id = 'subtract'>-</a>

                <a id = 'four'>4</a>
                <a id = 'five'>5</a>
                <a id = 'six'>6</a>
                <a id = 'add'>+</a>

                <a id = 'one'>1</a>
                <a id = 'two'>2</a>
                <a id = 'three'>3</a>

                <a id = "equals">=</a>

                <a id = "zero">0</a>
                <a id = 'period'>.</a>

            </div>
        </div>
        </div>
        )
    }
}


ReactDom.render(<Calculator />, document.getElementById('root'));