import React, { Component } from 'react';
import './index.scss';


export default class Input extends Component {    
    render() {
      const { inputValue } = this.props;
      return(
        <div className="row form-group">
          <div className="inputdiv">{inputValue}</div>
        </div>
      );
    }
  }