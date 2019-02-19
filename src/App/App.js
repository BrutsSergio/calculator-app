import React, { Component } from 'react';
import * as math from 'mathjs';

import Input from '../Input';
import Button from '../Button';
import ButtonBackSpace from '../ButtonBackSpace';

import './index.scss';

const arrayKey = ['1','2','3','4','5','6','7','8','9','0','-','+','/','*','(',')', '.'];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue : []
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
      inputValue: [math.eval(mathExpression)]
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
    } else if(e.key === 'Backspace') {
      this.handleClickBackSpace();
    }

    if(arrayKey.indexOf( String( e.key ) ) > -1 ) {
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

    const { inputValue} = this.state;

    return (
      <>
      <div className="app">
        <h1 className="text-center">Calculator</h1>
        <Input inputValue={inputValue}/>

        <div className="row form-group">
            <Button value="(" block outline color="secondary" onClick={this.handleClick} />
            <Button value=")" block outline color="secondary" onClick={this.handleClick}/>
            <ButtonBackSpace block outline color="secondary" onClick={this.handleClickBackSpace} />
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
      </>
    );
  }
}

export default App;