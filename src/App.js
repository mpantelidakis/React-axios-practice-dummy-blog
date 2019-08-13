import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // Here we need to set the basename
      // which is the path that the react app is hosted in our server
      // <BrowserRouter basename='/my-app'>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
