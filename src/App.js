import React, { Component } from 'react';
import './app.css';
//import Input from './input';
import Button from './button';
import {SomeContext} from './context';

const arrayKey = {
  keyCode49: '1',
  keyCode50: '2',
  keyCode51: '3',
  keyCode52: '4',
  keyCode53: '5',
  keyCode54: '6',
  keyCode55: '7',
  keyCode56: '8',
  keyCode57: '9',
  keyCode48: '0',
  keyCode97: '1',
  keyCode98: '2',
  keyCode99: '3',
  keyCode100: '4',
  keyCode101: '5',
  keyCode102: '6',
  keyCode103: '7',
  keyCode104: '8',
  keyCode105: '9',
  keyCode96: '0'
}

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
      //alert('A name button click: ' + value);
   }

   handleClickAC = () => {
    this.setState({inputValue:   []})
      //alert('A name button click: ' + value);
   }

   handleKeyPress = (e) => {
    this.setState({currentKey: e.keyCode});
    if(e.keyCode === 27) {
      console.log('You just pressed Escape!');
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }


  render() {
    return (
      <div className="app">
        <h1 className="text-center">Calculator</h1>
        <div className="row form-group">
          <div className="inputdiv">{this.state.inputValue}{this.state.currentKey}</div>
        </div>
        <div className="row form-group">
            <Button value="(" block outline color="secondary" onClick={this.handleClick} />
            <Button value=")" block outline color="secondary" onClick={this.handleClick}/>
            <Button value="%" block outline color="secondary" onClick={this.handleClick}/>
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
                  <Button value="x" block outline color="secondary" onClick={this.handleClick} />
                </div>
                <div className="row form-group">
                  <Button value="-" block outline color="secondary" onClick={this.handleClick}/>
                </div>
              </div>
        </div>
        <div className="row">
            <Button value="0" block outline color="secondary" onClick={this.handleClick}/>
            <Button value="." block outline color="secondary" onClick={this.handleClick}/>
            <Button value="=" block outline color="primary" />
            <Button value="+" block outline color="secondary" onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
