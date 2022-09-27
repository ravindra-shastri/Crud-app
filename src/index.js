import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditBlog from './components/EditBlog';
import App from './App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <App />
      </Route>
      <Route path="/edit/:id"
        component={EditBlog}
      >
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

