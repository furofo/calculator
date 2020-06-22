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
        <div class = "calculator">
            <div id = "display">
                <p class = "display-text"></p>
                <p class = "display-text"></p>
            </div>

        </div>
        )
    }
}


ReactDom.render(<Calculator />, document.getElementById('root'));