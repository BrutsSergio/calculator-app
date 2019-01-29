import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
    render() {
      return(
        <div className="col">
          <input className="form-control" type="text" />
        </div>
      );
    }
  }