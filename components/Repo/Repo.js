import React from 'react';
import ReactDOM from 'react-dom';

export default class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  	const {repo} = this.props; 
    return (
    	<li className="repo-item list-group-item">
			   <a href={repo.html_url}>{repo.name}</a> : {repo.description}
    	</li>
    );
  }
}