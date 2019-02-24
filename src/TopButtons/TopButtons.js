import React, { Component } from 'react';
import Button from '../Button';
import './index.scss';

export default class TopButtons extends Component {

    render() {

        return (

            <div className="row form-group">
                <Button value="(" block outline color="secondary"/>
                <Button value=")" block outline color="secondary"/>
                <Button isBackSpace block outline color="secondary"/>
                <Button isAc value="AC" block outline color="secondary"/>
            </div>

        );
    }
}