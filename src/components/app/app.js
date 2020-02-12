import React, {Component} from 'react';

import Header from '../header';
import InputForm from '../input-form';

import './app.css';

export default class App extends Component {

    state = {

    }

    render () {
        return (
            <div className="container">
                <Header/>    
                <InputForm/>    
            </div>
        );
    }
}