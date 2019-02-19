import React, { Component } from 'react';

import './index.scss';
import backspace from '../backspace.svg';

export default class ButtonBackSpace extends Component {

    handleClickBackSpace = () => {
      this.props.onClick()
    }

    render() {
        
      let className = 'btn';
  
      if (this.props.color && this.props.outline) {
        className += ' btn-outline-' + this.props.color;
      } else if(this.props.color) {
        className += ' btn-' + this.props.color;
      };
  
      if (this.props.size) {
        className += ' btn-' + this.props.size;
      };
  
      if (this.props.block) {
        className += ' btn-block';
      };
  
      return (
        <>
        <div className="col">
          <button className={className} onClick={this.handleClickBackSpace}>
            <img width="12px" height="12px" src={backspace} alt="BackSpace"/>
          </button> 
        </div>
        </>
      );
    }
  }
  