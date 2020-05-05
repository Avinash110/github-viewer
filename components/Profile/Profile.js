import React from 'react';
import ReactDOM from 'react-dom';
import './Profile.css';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    	<div className="profile">
	    	<div className="card">
			  <div className="card-header">{this.props.userData.name}</div>
			  <div className="card-block">
			    <div className="row">
			    	<div className="col-md-4">
			    		<img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}} alt=""/>	
			    	</div>
			    	<div className="col-md-8">
			    		<div className="row">
							<div className="col-md-12">
								<span className="user-label badge badge-primary">{this.props.userData.public_repos} Repos</span>
								<span className="user-label badge badge-success">{this.props.userData.public_gists} Gists</span>
								<span className="user-label badge badge-info">{this.props.userData.followers} Followers</span>
								<span className="user-label badge badge-danger">{this.props.userData.following} Following</span>
							</div>
			    		</div>
			    		<hr/>
			    		<div className="row">
			    			<div className="col-md-12">
			    				<ul className="list-group">
			    					<li className="list-group-item"><strong>Username: {this.props.userData.login}</strong></li>
			    					<li className="list-group-item"><strong>Email: {this.props.userData.email}</strong></li>
			    					<li className="list-group-item"><strong>Location: {this.props.userData.location}</strong></li>
			    				</ul>
			    			</div>
			    		</div>
			    		<br/>
			    		<a className="link btn btn-primary" target="_blank" href={this.props.userData.html_url}> Visit Profile</a>
			    	</div>
			    </div>
			  </div>
			</div>
		</div>
	);
  }
}