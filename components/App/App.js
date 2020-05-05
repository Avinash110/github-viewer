import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar.js';
import Profile from '../Profile/Profile.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            userName: "maheshwarigagan",
            userData: [],
            pageSize: 5,
            useRepoList: []
        };
    }

    componentDidMount() {
		
		this.getUserData();

    }
	
    getUserData = () => {
		$.ajax({
			url: `https://api.github.com/users/${this.state.userName}`,
			dataType: 'jsonp',
			crossDomain: true,
			cache: false,
			success: (data) => {
				this.setState({userData: data});
				console.log(data);
			},
			error: (xhr, status, err) => {
				alert(err);
				this.setState({userName: null});
			}
		});

    }


    render() {
        return (
            <div>
		    	<NavBar />
		    	<div class="container">
			    	<div class="row">
			        	<div class="col-md-12">
				    		<Profile 
								userData={this.state.userData}
					 		/>
		      			</div>
		    		</div>
	 			</div>
	 		</div>
	 	);
    }
}

App.propTypes = {
    clientId: PropTypes.string,
    clientSecret: PropTypes.string
};

App.defaultProps = {
    clientId: "414ee8c20d9b407614c9",
    clientSecret: "3ccac8352b7565306a34273f09ce60f3dad4028d"
};