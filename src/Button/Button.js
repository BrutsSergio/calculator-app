import React, { Component } from 'react';
import './index.scss';

export default class Button extends Component {

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
  
      return (
        <>
        <div className="col">
          <button className={className} onClick={this.handleClick}>
            {this.props.value}
          </button> 
        </div>
        </>
      );
    }
  }
  