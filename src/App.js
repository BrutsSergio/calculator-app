import React, { Component } from 'react';
import './app.css';


class Button extends Component {
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


class Input extends Component {
  render() {
    return(
      <div className="col">
        <input className="form-control" type="text"/>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="text-center">Calculator</h1>
        <div className="row form-group">
          <Input />
        </div>
        <div className="buttons justify-content-center">
          <div className="row form-group">
              <Button block outline color="secondary">(</Button>
              <Button block outline color="secondary">(</Button>
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
          <div className="row form-group">
              <Button block outline color="secondary">0</Button>
              <Button block outline color="secondary">.</Button>
              <Button block outline color="primary">=</Button>
              <Button block outline color="secondary">+</Button>
          </div>
            
        </div>
      </div>
    );
  }
}

export default App;
