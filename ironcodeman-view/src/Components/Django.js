import React, { Component } from 'react';
import { Table } from 'reactstrap';
import DjangoData from '../Data/DjangoData'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../CSS/Github.css';
export default class Django extends Component {
  constructor() {
    super();
    this.state = {
      djangoIntro: [],
    }
  }
  componentDidMount() {
    const djangoArr = [];
    for (let i = 0; i < DjangoData.length; i += 1) {
      if (DjangoData[i].type === "Django Intro") {
        djangoArr.push(DjangoData[i]);
      } 
    }

    this.setState({ 
      djangoIntro: djangoArr,
    });
  }
  render() {
    const djangoArr = this.state.djangoIntro;
    return(
      <div>
        <div className="Github-title-container">
          <h1>Django</h1>
        </div>
          <div className="Github-table-container">
            <div className="Github-table-header">
              <h3>Django basic commands</h3>
              <p>Please make sure to install the latest version of Python and use a virutalenvwrapper to set up a environment for 
                Django before running these commands. You can use these documentations if you want to know how to set up a virtual 
                enviroment for Django. <a href="https://virtualenvwrapper.readthedocs.io/en/latest/">
                https://virtualenvwrapper.readthedocs.io/en/latest/</a></p>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th><b>Command</b></th>
                  <th><b>Description</b></th>
                </tr>
              </thead>
              <tbody>
                {djangoArr.map((post, index) => 
                  (
                    <tr key={post.description}>
                      <th scope="row">{index + 1}</th>
                      <th>{post.command}</th>
                      <th>{post.description}</th>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
      </div>
    );
  }
}