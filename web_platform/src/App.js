import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogContainer from './containers/BlogContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/econ_blog/:id?" component={BlogContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
