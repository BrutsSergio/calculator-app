import React, { Component } from 'react';

import AppHead from '../AppHead';
import TopButtons from '../TopButtons';
import CenterButtons from '../CenterButtons';
import BottomButtons from '../BottomButtons';
import Manager from '../Manager';

import './index.scss';

class App extends Component {

  render() {
    return (
      <div className="app">

        <Manager>
          <AppHead title="Calculator"/>
          <TopButtons />
          <CenterButtons />
          <BottomButtons />
        </Manager>

      </div>
    );
  }
}

export default App;