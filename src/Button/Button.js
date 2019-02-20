import React, { Component } from 'react';

import backspace from '../backspace.svg';

import './index.scss';

export default class Button extends Component {

    handleClickBackSpace = () => {
      this.props.onClick()
    }

    handleClick = () => {
      this.props.onClick(this.props.value)
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

      const isBackSpace = this.props.isBackSpace;
  
      return (
        <>
        <div className="col">
          {isBackSpace ? (
            
            <button className={className} onClick={this.handleClickBackSpace}>
            <img width="12px" height="12px" src={backspace} alt="BackSpace"/>
          </button>
          ) : (
            <button className={className} onClick={this.handleClick}>
              {this.props.value}
            </button> 
          )}
        </div>
        </>
      );
    }
  }
  