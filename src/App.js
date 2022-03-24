import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Fragment>
    );
  }
}

export default App;