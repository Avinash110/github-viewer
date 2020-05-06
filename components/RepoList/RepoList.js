import React from 'react';
import ReactDOM from 'react-dom';
import './RepoList.css';

import Repo from "../Repo/Repo.js";
export default class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
		<div>
			<ul className="list-group">
				{
					this.props.repos.map(repo => {
						return <Repo 
									repo={repo}
									key={repo.id}
									{...this.props}
								/>
					})
				}
			</ul>
		</div>
    );
  }
}