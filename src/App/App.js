import React, { Component } from 'react';
import './index.scss';
//import Input from '../Input';
import Button from '../Button';
import * as math from 'mathjs';

import backspace from '../backspace.svg';

const arrayKey = ['1','2','3','4','5','6','7','8','9','0','-','+','/','*','(',')', '.'];

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        inputValue : [],
        currentKey : ''
      }
    }

   handleClick = (value) => {
      this.setState({inputValue:   [...this.state.inputValue, value]})
   }

   handleClickBackSpace= () => {
    this.setState({
      inputValue: this.state.inputValue.slice(0, -1)
    })
   }

   handleClickEqual = (value) => {
    let mathExpression = this.state.inputValue.join('');

    this.setState({
      inputValue: [math.eval(mathExpression)], 
    });

 }

   handleClickAC = () => {
     const {inputValue} = this.state;
     if (inputValue && inputValue.length) {
      this.setState({inputValue:   []})
      
     } else{
      alert('Insert Data');
     }
    
      
   }

   handleKeyPress = (e) => {
    const {inputValue} = this.state;
    if(e.key === 'Escape') {
      if (inputValue && inputValue.length) {
        this.setState({inputValue:   []})
        
      } else{
      alert('Insert Data');
      }
    }

    if(arrayKey.indexOf( String( e.key ) ) > -1 ) {
      console.log(String( e.key ));
      this.setState({inputValue:   [...this.state.inputValue, String( e.key )]})
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }


  render() {

    const { inputValue, currentKey } = this.state;

    return (
      <>
      <div className="app">
        <h1 className="text-center">Calculator</h1>
        <div className="row form-group">
          <div className="inputdiv">{inputValue}</div>
        </div>
        <div className="row form-group">
            <Button value="(" block outline color="secondary" onClick={this.handleClick} />
            <Button value=")" block outline color="secondary" onClick={this.handleClick}/>
            <div className="col">
              <button className='btn btn-outline-secondary btn-block' onClick={this.handleClickBackSpace}>
                <img width="12px" height="12px" src={backspace} als=""/>
              </button> 
            </div>
            <Button value="AC" block outline color="secondary" onClick={this.handleClickAC}/>
        </div>
        <div className="row">
              <div className="col-9">
                <div className="row form-group">
                  <Button value="7" block outline color="secondary" onClick={this.handleClick} />
                  <Button value="8" block outline color="secondary" onClick={this.handleClick} />
                  <Button value="9" block outline color="secondary" onClick={this.handleClick} />
                </div>
                <div className="row form-group">
                  <Button value="4" block outline color="secondary" onClick={this.handleClick} />
                  <Button value="5" block outline color="secondary" onClick={this.handleClick} />
                  <Button value="6" block outline color="secondary" onClick={this.handleClick} />
                </div>
                <div className="row form-group">
                    <Button value="1" block outline color="secondary" onClick={this.handleClick} />
                    <Button value="2" block outline color="secondary" onClick={this.handleClick} />
                    <Button value="3" block outline color="secondary" onClick={this.handleClick} />
                </div>
              </div>
              <div className="col-3">
                <div className="row form-group">
                  <Button value="/" block outline color="secondary" onClick={this.handleClick} />
                </div>
                <div className="row form-group">
                  <Button value="*" block outline color="secondary" onClick={this.handleClick} />
                </div>
                <div className="row form-group">
                  <Button value="-" block outline color="secondary" onClick={this.handleClick}/>
                </div>
              </div>
        </div>
        <div className="row">
            <Button value="0" block outline color="secondary" onClick={this.handleClick}/>
            <Button value="." block outline color="secondary" onClick={this.handleClick}/>
            <Button value="=" block outline color="primary" onClick={this.handleClickEqual}/>
            <Button value="+" block outline color="secondary" onClick={this.handleClick}/>
        </div>
      </div>

      <div className="history">
          <h3>History All Operation</h3>
          <table className="table">
            
            <thead>
              <tr>
                <td>Operation</td>
                <td>Equal</td>
              </tr>
            </thead>
            <tbody>
              <HistoryRow/>
              <HistoryRow/>
              <HistoryRow/>
            </tbody>
          </table>
      </div>
      </>
    );
  }
}

export default App;



export class HistoryRow extends Component {

  render(){
    return(
      <>
      <tr >
        <td></td>
        <td></td>
      </tr>
      </>
    );
  }
}