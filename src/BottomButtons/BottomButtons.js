import React, { Component } from 'react';
import Button from '../Button';
import './index.scss';

export default class  BottomButtons extends Component {

    render() {

        return (
            <div className="row">
                <Button value="0" block outline color="secondary"/>
                <Button value="." block outline color="secondary"/>
                <Button value="=" isEqual block outline color="primary"/>
                <Button value="+" block outline color="secondary"/>
            </div>
        );
    }
}

