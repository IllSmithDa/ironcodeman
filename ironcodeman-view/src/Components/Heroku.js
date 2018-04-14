import React, { Component } from 'react';

export default class Github extends Component {

  render() {
    return(
      <div>
        <h1>Heroku</h1>
          <h2> Heroku Command List </h2>
          <ul>
            <li>'brew install heroku/brew/heroku' - installs heroku on mac using brew. </li>
            <li> 'heroku login' - login to heroku from command line and allows access to heroku commands</li>
            <li> 'heroku create appname' - creates app called appname</li>
            <li> 'heroku git:remote -a app-name' - switch from current app to another app called 'app-name'</li>
            <li> 'git push heroku master' - launches and deloys the app. It also pushes any new changes you made to the app as well</li>
            <li> 'git push -am "comment"' - commits change you made to files for it to be push up to the master heroku branch</li>
            <li> 'heroku ps:scale web=0 --app django-stuff' - set scale to 0 the website cannot be view by anyone. Still deployed</li>
            <li> 'heroku ps:scale web=1 --app django-stuff' - set scale to 0 the website can be viewed</li>
            <li> heroku create -b https://github.com/mars/create-react-app-buildpack.git'  creates a heroku + react app that is ready to be deployed</li>
          </ul>
      </div>
    )
  }
}