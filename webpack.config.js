const path = require("path");
module.exports = {
	entry:[
		'./public/javascripts/index.js'
	],
	output: {
		path: path.resolve(__dirname),
		filename: 'public/javascripts/bundle.js'
	},
	module: {
		rules: [
			{
			    test: /\.js$/,
			    exclude: /node_modules/,
			    use: [
			        {
			            loader: 'babel-loader',
			            options: {
				        	presets: ['@babel/react']
				        }
			        }
			    ]
			}
		]
	}

}