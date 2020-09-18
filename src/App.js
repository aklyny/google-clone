import React from 'react';
import './App.css';
import Home from './components/Home';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
              <SearchPage />
          </Route>
           <Route exact path="/">
              <Home />
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
