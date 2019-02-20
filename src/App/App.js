import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import Manager from '../Manager';

import Context from '../context';

import './index.scss';

class App extends Component {

  static contextType = Context;

  constructor(props){
    super(props);
    this.state = {
      inputValue : []
    }
  }
  
  handleKeyPress= (e) => {
    console.log('dfs');
   //this.context.handleKeyPress();
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  

  render() {

    const {inputValue} = this.state;

    return (
      <>
      <Manager>
      <div className="app">
        <h1 className="text-center">Calculator</h1>
        <Input inputValue={inputValue}/>

        <div className="row form-group">
            <Button value="(" block outline color="secondary"/>
            <Button value=")" block outline color="secondary"/>
            <Button isBackSpace block outline color="secondary"/>
            <Button isAc value="AC" block outline color="secondary"/>
        </div>

        <div className="row">
              <div className="col-9">
                <div className="row form-group">
                  <Button value="7" block outline color="secondary"/>
                  <Button value="8" block outline color="secondary"/>
                  <Button value="9" block outline color="secondary"/>
                </div>
                <div className="row form-group">
                  <Button value="4" block outline color="secondary"/>
                  <Button value="5" block outline color="secondary"/>
                  <Button value="6" block outline color="secondary"/>
                </div>
                <div className="row form-group">
                  <Button value="1" block outline color="secondary"/>
                  <Button value="2" block outline color="secondary"/>
                  <Button value="3" block outline color="secondary"/>
                </div>
              </div>
              <div className="col-3">
                <div className="row form-group">
                  <Button value="/" block outline color="secondary"/>
                </div>
                <div className="row form-group">
                  <Button value="*" block outline color="secondary"/>
                </div>
                <div className="row form-group">
                  <Button value="-" block outline color="secondary"/>
                </div>
              </div>
        </div>

        <div className="row">
            <Button value="0" block outline color="secondary"/>
            <Button value="." block outline color="secondary"/>
            <Button value="=" isEqual block outline color="primary"/>
            <Button value="+" block outline color="secondary"/>
        </div>
      </div>
      </Manager>
      </>
    );
  }
}

export default App;