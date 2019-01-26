import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        
        <div className="row form-group">
          <div className="col">
            <input className="form-control" type="text"/>
          </div>
        </div>
        <div className="buttons justify-content-center">
          <div className="row form-group">
            <div className="col-sm">
              <Button block outline color="secondary">(</Button>
            </div>
            <div className="col-sm">
              <Button block outline color="secondary">(</Button>
            </div>
            <div className="col-sm">
              <Button block outline color="secondary">%</Button>
            </div>
            <div className="col-sm">
              <Button block outline color="secondary">AC</Button>
            </div>
          </div>
          <div className="row">
                <div className="col-9">
                  <div className="row form-group">
                    <div className="col-sm">
                      <Button block outline color="secondary">7</Button>
                    </div>
                    <div className="col-sm">
                      <Button block outline color="secondary">8</Button>
                    </div>
                    <div className="col-sm">
                      <Button block outline color="secondary">9</Button>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-sm">
                      <Button block outline color="secondary">4</Button>
                    </div>
                    <div className="col-sm">
                      <Button block outline color="secondary">5</Button>
                    </div>
                    <div className="col-sm">
                      <Button block outline color="secondary">6</Button>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-sm">
                      <Button block outline color="secondary">1</Button>
                    </div>
                    <div className="col-sm">
                      <Button block outline color="secondary">2</Button>
                    </div>
                    <div className="col-sm">
                      <Button block outline color="secondary">3</Button>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <Button block outline color="secondary">%</Button>
                  </div>
                  <div className="form-group">
                    <Button block outline color="secondary">x</Button>
                  </div>
                  <div className="form-group">
                    <Button block outline color="secondary">-</Button>
                  </div>
                </div>
          </div>
          <div className="row form-group">
            <div className="col-sm">
              <Button block outline color="secondary">0</Button>
            </div>
            <div className="col-sm">
              <Button block outline color="secondary">.</Button>
            </div>
            <div className="col-sm">
              <Button block outline color="primary">=</Button>
            </div>
            <div className="col-sm">
              <Button block outline color="secondary">+</Button>
            </div>
          </div>
            
        </div>
      </div>
    );
  }
}

export default App;
