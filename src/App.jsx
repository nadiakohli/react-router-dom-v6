import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import AppRouter from 'routes';

const App = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default App;
