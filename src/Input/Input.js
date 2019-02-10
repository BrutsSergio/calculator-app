import React, { Component } from 'react';
import './index.scss';


export default class Input extends Component {
    constructor(){
      super();
      this.state = {
        inputValue: '0',
        currentKey: ''
      }
    }
    
    render() {
      const { inputValue, currentKey } = this.state;
      return(
        <div className="row form-group">
          <div className="inputdiv">{inputValue}{currentKey}</div>
        </div>
      );
    }
  }