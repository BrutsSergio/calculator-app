import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
    constructor(props) {
        super(props);  
        this.state  = {
            value: this.props.children,
            color: this.props.color,
            size: this.props.size,
        };
    }

    handleClick(e) {
      e.preventDefault();
      alert('A name button click: ' + this.state.value);
    }
    
    render() {
        
      let className = 'btn';
  
      if (this.state.color && this.props.outline) {
        className += ' btn-outline-' + this.state.color;
      } else if(this.state.color) {
        className += ' btn-' + this.state.color;
      };
  
      if (this.state.size) {
        className += ' btn-' + this.state.size;
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
  