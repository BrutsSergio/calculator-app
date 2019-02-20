import React, { Component } from 'react';
import Context from '../context';
import * as math from 'mathjs';

import './index.scss';

const arrayKey = ['1','2','3','4','5','6','7','8','9','0','-','+','/','*','(',')', '.'];


export default class Manager extends Component {
  
  state = {
    inputValue: ''
  };

  render() {
    const {
      state,
      handleClick,
      handleClickBackSpace,
      handleClickEqual,
      handleClickAC,
      handleKeyPress
     } = this;
      
    return (
      <>
        <Context.Provider value={{
          ...state,
          handleClick,
          handleClickBackSpace,
          handleClickEqual,
          handleClickAC,
          handleKeyPress
          }}>
          {this.props.children}
        </Context.Provider>
      </>
    );
  }

  handleClick = (value) => {
    console.log('handleClick', {...this.state.inputValue});
    this.setState({inputValue:   [...this.state.inputValue, value]})
  }

  handleClickBackSpace= () => {
    console.log('handleClickBackSpace');
    this.setState({
      inputValue: this.state.inputValue.slice(0, -1)
    })
  }

  handleClickEqual = () => {
    console.log('handleClickEqual');
    let mathExpression = this.state.inputValue.join('');

    this.setState({
      inputValue: [math.eval(mathExpression)]
    });
  }

  handleClickAC = () => {
    console.log('handleClickAC');
    const {inputValue} = this.state;
    if (inputValue && inputValue.length) {
      this.setState({inputValue:   []})
    } else{
      alert('Insert Data');
    }
  
  }

  handleKeyPress = (e) => {
    console.log('handleKeyPress');
    const {inputValue} = this.state;
    if(e.key === 'Escape') {
      if (inputValue && inputValue.length) {
        this.setState({inputValue:   []})
      } else{
        alert('Insert Data');
      }
    } else if(e.key === 'Backspace') {
      this.handleClickBackSpace();
    }

    if(arrayKey.indexOf( String( e.key ) ) > -1 ) {
      this.setState({inputValue:   [...this.state.inputValue, String( e.key )]})
    }
  }
}
  