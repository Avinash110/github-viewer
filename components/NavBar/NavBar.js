import React from 'react';
import ReactDOM from 'react-dom';

import {Toggle} from "../Toggle/Toggle.js"

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <nav className="navbar navbar-expand-lg" style={{justifyContent: "space-between"}}>
  		    <a className="navbar-brand" href="#">Github Viewer</a>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <label style={{marginRight: "4px"}}>Select Theme </label>
              <Toggle theme={this.props.theme} toggleTheme={this.props.onThemeChange} />
          </div>
		</nav>
    }
}