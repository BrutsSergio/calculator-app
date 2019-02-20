import React, { Component } from 'react';
import Context from '../context';

import backspace from '../backspace.svg';

import './index.scss';

export default class Button extends Component {

  static contextType = Context;

  handleClick = () => {
    this.props.onClick(this.props.value)
  }
  
  render() {

    const { 
      outline, 
      color, 
      size,
      block,
      isEqual,
      isAc,
      isBackSpace,
      value} = this.props;

    const {
      handleClickBackSpace
    } = this.context;
      
    let className = 'btn';

    if (color && outline) {
      className += ' btn-outline-' + color;
    } else if(color) {
      className += ' btn-' + color;
    };

    if (size) {
      className += ' btn-' + size;
    };

    if (block) {
      className += ' btn-block';
    };

    return (
      <>
      <div className="col">
        {isBackSpace ? (
          <button className={className} onClick={handleClickBackSpace}>
            <img width="12px" height="12px" src={backspace} alt="BackSpace"/>
          </button>
        ) : (
          <button className={className} onClick={isEqual ? (this.context.handleClickEqual) :isAc ? (this.context.handleClickAC) : (this.handleClick)}>
            {value}
          </button> 
        )}
      </div>
      </>
    );
  }

  handleClick = (event) => {
    this.context.handleClick(this.props.value);
  }
}
  