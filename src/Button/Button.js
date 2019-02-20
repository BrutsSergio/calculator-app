import React, { Component } from 'react';
import classNames from 'classnames';
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

    let btnClass = classNames({
      btn: true,
      [`btn-outline-${color}`] : color && outline,
      [`btn-${color}`] : color && !outline,
      [`btn-${size}`] : size,
      [`btn-block`] : block
    });

    return (
      <>
      <div className="col">
        {isBackSpace ? (
          
          <button className={btnClass} onClick={handleClickBackSpace}>
            <img width="12px" height="12px" src={backspace} alt="BackSpace"/>
          </button>
        ) : (
          <button className={btnClass} onClick={isEqual ? (this.context.handleClickEqual) :isAc ? (this.context.handleClickAC) : (this.handleClick)}>
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
  