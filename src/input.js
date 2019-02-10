import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {

	handleChange = () => {
      this.props.onClick(this.props.value)
    }

    render() {


      return(
        <>
        <div className="col">
          <div className="form-control" onChange={this.handleChange}/>
        </div>
        </>
      );
    }
  }