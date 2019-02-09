import React, { Fragment } from 'react';
import Router from './routes';
import { Footer, Navbar } from './components';

const App = () => (
  <Fragment>
    <Navbar />
    <Router />
    <Footer />
  </Fragment>
)

export default App;
