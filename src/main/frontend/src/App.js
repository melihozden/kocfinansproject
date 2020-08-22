import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact render={() => <MainPage  />} />
        <Route path="/search"  render={() => <SearchPage  />} />
      </Router>
    </div>
  );
}

export default App;
