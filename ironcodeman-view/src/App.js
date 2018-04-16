import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import GitHub from './Components/Gitbhub'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Iron Code Man</h1>
        <Card>
          <Link to="/command">
            <h1> Basic Commands </h1>
          </Link>
        </Card>
        <Card>
          <Link to="/github">
            <h1> Git Commands </h1>
          </Link>
        </Card>
        <Card>
          <Link to="/heroku">
            <h1> Heroku Commands </h1>
          </Link>
        </Card>
        <Card>
          <Link to="/django">
            <h1> Django Commands </h1>
          </Link>
        </Card>
      </div>
    );
  }
}

export default App;
