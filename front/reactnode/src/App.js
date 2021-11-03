import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Posts from './Posts';
import Messages from './Messages';


function App() {
  return (
    <Router>
                <div>
                    <Link to="/messages">Messages</Link>
                    <Link to="/posts">Posts</Link>
                </div>
                <div>
                  <Switch>
                    <Route exact path="/messages"><h1><Messages /></h1></Route>
                    <Route exact path="/posts"><h1><Posts /></h1></Route>
                </Switch>
               </div>
      </Router>
  );
}

export default App;
