import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Github from './Components/Gitbhub';
import Heroku from './Components/Heroku';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/github" component={Github} />
    <Route path="/heroku" component={Heroku} />
  </div>
</Router>,
document.getElementById('root'),
);
registerServiceWorker();
