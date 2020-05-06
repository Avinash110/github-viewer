import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar.js';
import Profile from '../Profile/Profile.js';
import Search from "../Search/Search.js";

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme.js';
import { GlobalStyles } from "../../global.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			theme: 'light',
            userName: "Avinash110",
            userData: [],
            pageSize: 5,
            userRepoList: []
        };
    }

    componentDidMount() {
		this.getUserData();
		this.getUserRepos();
    }
	
    getUserData = () => {
		$.ajax({
			url: `https://api.github.com/users/${this.state.userName}`,
			dataType: 'jsonp',
			crossDomain: true,
			cache: false,
			success: (res) => {
				this.setState({userData: res.data});
			},
			error: (xhr, status, err) => {
				alert("Github API rate limit exceeded. Please try after some time.");
				this.setState({userName: null});
			}
		});
    }

    getUserRepos = () => {
    	$.ajax({
			url: `https://api.github.com/users/${this.state.userName}/repos`,
			dataType: 'jsonp',
			crossDomain: true,
			cache: false,
			success: (res) => {
				this.setState({userRepoList: res.data});
			},
			error: (xhr, status, err) => {
				alert("Github API rate limit exceeded. Please try after some time.");
				this.setState({userName: null});
			}
		});
    }

    handleFormSubmit = (username) => {
		this.setState({userName: username}, () => {
			this.getUserData();
			this.getUserRepos();
		});
    }

    handleChangeTheme = () => {
    	this.setState({theme: this.state.theme == 'light' ? 'dark' : 'light'});
    }

    render() {
        return (
            <React.Fragment>
            	<ThemeProvider theme={this.state.theme == 'light' ? lightTheme : darkTheme}>
            		<>
            		<GlobalStyles />
			    	<NavBar
			    		theme = {this.state.theme}
						onThemeChange = {this.handleChangeTheme}
			    	/>
			    	<div className="container">
				    	<div className="row">
				        	<div className="col-md-12">
			    				<Search 
			    					onFormSubmit = {this.handleFormSubmit}  
			    				/>
					    		<Profile 
									{...this.state}
						 		/>
			      			</div>
			    		</div>
		 			</div>
		 			</>
		 		</ThemeProvider>
	 		</React.Fragment>
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