import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = (event) => {
	event.preventDefault();
	const value = this.refs.username.value.trim();
	if (!value){
		alert("Please Enter Username");
	}

	this.props.onFormSubmit(value);
	this.refs.username.value = "";
  }

  render() {
    return (
		<div>
			<form onSubmit={this.onSubmit}>
				<label >Search Github Users</label>
				<input type="text" ref="username" className="form-control"/>
			</form>
		</div>
    );
  }
}