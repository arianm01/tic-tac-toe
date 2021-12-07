import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './components/start';
import Game from './components/game';
import Finish from './components/finish';

function App() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/finish" component={Finish} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
