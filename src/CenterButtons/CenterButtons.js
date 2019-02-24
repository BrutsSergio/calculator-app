import React, { Component } from 'react';
import Button from '../Button';
import './index.scss';

export default class CenterButtons extends Component {

    render() {

        return (
            <div className="row">
              <div className="col-9">
                <div className="row form-group">
                  <Button value="7" block outline color="secondary"/>
                  <Button value="8" block outline color="secondary"/>
                  <Button value="9" block outline color="secondary"/>
                </div>
                <div className="row form-group">
                  <Button value="4" block outline color="secondary"/>
                  <Button value="5" block outline color="secondary"/>
                  <Button value="6" block outline color="secondary"/>
                </div>
                <div className="row form-group">
                  <Button value="1" block outline color="secondary"/>
                  <Button value="2" block outline color="secondary"/>
                  <Button value="3" block outline color="secondary"/>
                </div>
              </div>
              <div className="col-3">
                <div className="row form-group">
                  <Button value="/" block outline color="secondary"/>
                </div>
                <div className="row form-group">
                  <Button value="*" block outline color="secondary"/>
                </div>
                <div className="row form-group">
                  <Button value="-" block outline color="secondary"/>
                </div>
              </div>
        </div>
        );
    }
}
