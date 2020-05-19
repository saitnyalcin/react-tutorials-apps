import React from 'react';
import './App.css';
import AppMain from './components/AppMain';
import About from './courses/About';
import Home from './courses/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <AppMain
        appName={props.appName}
        appHeader={props.appHeader}
        appContent={props.appContent}
      />
      <hr />

      <Router>
        <div>
          <ul>
            <li>
              <Link className="nav-link" to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={'/about'}>
                What is react
              </Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
