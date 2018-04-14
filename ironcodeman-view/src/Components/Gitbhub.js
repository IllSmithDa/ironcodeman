import React, { Component } from 'react';

export default class Github extends Component {

  render() {
    return(
      <div>
        <h1>Github</h1>
          <h2> Github Set Up </h2>
          <ul>
            <li>git init - sets current local directory as a Git Repository</li>
            <li>git add . - adds files in local directory for commit</li>
            <li>git reset HEAD FileName - undo a git add for the file 'FileName' </li>
            <li>git commit -m "Comment here" - commits the files to be pushed to Github repository</li>
            <li>git push origin master - push files to the Github repo under the branch name 'master' </li>
          </ul>
      </div>
    )
  }
}