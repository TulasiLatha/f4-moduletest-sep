// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import HistoryPage from './Components/HistoryPage';
import WordDetailsPage from './Components/WordDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/word/:word" component={WordDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
