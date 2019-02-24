import React, { Component } from 'react';
import Context from '../context';

import './index.scss';

export default class Input extends Component {   
  
    static contextType = Context;

    render() {

      const {
        inputValue
      } = this.context;

      return(
        <div className="row form-group">
          <div className="inputdiv">{inputValue}</div>
        </div>
      );
    }
  }