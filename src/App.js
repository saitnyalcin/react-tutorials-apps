import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import AppMain from './components/AppMain';
import About from './courses/About';
import Events from './courses/Events';
import Home from './courses/Home';

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
            <li>
              <Link className="nav-link" to={'/events'}>
                Events
              </Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
