const fs = require('fs');
const path = require('path');
const voca = require('voca');

if (process.argv.length < 3) {
	console.error("Please Specify Component Name");
	process.exit(0);
}

const nameToReplace = "$COMPONENTNAME$";
const template = "import React from 'react';\n\
import ReactDOM from 'react-dom';\n\
\n\
export default class $COMPONENTNAME$ extends React.Component {\n\
  constructor() {\n\
    super();\n\
    this.state = {};\n\
  }\n\
  render() {\n\
    return <h2>Welcome to React App</h2>;\n\
  }\n\
}";

const componentName = voca.titleCase(process.argv[2]);

const dir = path.resolve(__dirname, "components", componentName);
if (!fs.existsSync()){
    fs.mkdirSync(dir);

    fs.writeFileSync(path.resolve(dir, componentName + ".js"), template.replace(nameToReplace, componentName)); 
    fs.writeFileSync(path.resolve(dir, componentName + ".css"), "");

    console.log("Component created !");
}

else {
	console.error("Component Already Exists !");
	process.exit(0);
}