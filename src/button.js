import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
    handleClick(e) {
      e.preventDefault();
      console.log('this is:', this.props.children);
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
        <div className="col">
          <button className={className} onClick={(e) => this.handleClick(e)}>
            {this.props.children}
          </button> 
        </div>
      );
    }
  }
  