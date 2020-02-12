import React, {Component} from 'react';

import "./input-form.css";

import Base64 from "../encoding";

export default class InputForm extends Component {

    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render () {
        const {value} = this.state;
        const encodedString = Base64.encodeBase64(value);

        const button = (<a href={`data:text/plain;charset=utf-8,${encodedString}`} download="text.txt">
                            <button type="button" className="btn btn-primary download-button">Скачати .txt</button>
                        </a>);

        const buttonVisible = value ? button : null;

        return (
            <form>  
                <div className="form-group">
                    <label for="exampleTextarea">Введіть текст</label>
                    <textarea value = {value} onChange={this.handleChange} className="form-control" id="exampleTextarea" rows="8"></textarea>
                    <h6>Довжина тексту: {value.length}</h6>
                </div>
                <div className="output">
                    <h5>Base64 код</h5>
                    <textarea value = {encodedString} onChange={this.handleChange} className="form-control" id="exampleTextarea" rows="10" disabled></textarea>
                    <h6>Довжина тексту: {encodedString.length}</h6>
                    {buttonVisible}
                </div>
            </form>                  
        );
    }
}