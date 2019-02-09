import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UsersView from './containers/UsersView';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/users" component={UsersView} />
    </Switch>
  </Router>
)

export default App;
