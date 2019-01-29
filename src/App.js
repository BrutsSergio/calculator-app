import React, { Component } from 'react';
import './app.css';
import Input from './input';
import Button from './button';


class App extends Component {
  

  render() {
    return (
      <div className="app">
        <h1 className="text-center">Calculator</h1>
        <div className="row form-group">
          <Input />
        </div>
        <div className="row form-group">
            <Button block outline color="secondary">(</Button>
            <Button block outline color="secondary">)</Button>
            <Button block outline color="secondary">%</Button>
            <Button block outline color="secondary">AC</Button>
        </div>
        <div className="row">
              <div className="col-9">
                <div className="row form-group">
                  <Button block outline color="secondary">7</Button>
                  <Button block outline color="secondary">8</Button>
                  <Button block outline color="secondary">9</Button>
                </div>
                <div className="row form-group">
                  <Button block outline color="secondary">4</Button>
                  <Button block outline color="secondary">5</Button>
                  <Button block outline color="secondary">6</Button>
                </div>
                <div className="row form-group">
                    <Button block outline color="secondary">1</Button>
                    <Button block outline color="secondary">2</Button>
                    <Button block outline color="secondary">3</Button>
                </div>
              </div>
              <div className="col-3">
                <div className="row form-group">
                  <Button block outline color="secondary">/</Button>
                </div>
                <div className="row form-group">
                  <Button block outline color="secondary">x</Button>
                </div>
                <div className="row form-group">
                  <Button block outline color="secondary">-</Button>
                </div>
              </div>
        </div>
        <div className="row">
            <Button block outline color="secondary">0</Button>
            <Button block outline color="secondary">.</Button>
            <Button block outline color="primary">=</Button>
            <Button block outline color="secondary">+</Button>
        </div>
      </div>
    );
  }
}

export default App;
