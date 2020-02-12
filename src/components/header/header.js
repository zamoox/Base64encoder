import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {
    render () {
        return (
            <div className="header d-flex">
                <h3>
                    <a href="#">
                        Base64Encoder
                    </a>
                </h3>
                {/* <ul className = "d-flex">
                    <li>
                        <a href="#">test</a>
                    </li>
                    <li>
                        <a href="#">test</a>
                    </li>
                    <li>
                        <a href="#">test</a>
                    </li>
                </ul> */}
            </div>
        ); 
    }
}