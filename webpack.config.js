const path = require('path');
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const env = process.env.NODE_ENV || 'development';

const plugins = [
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		filename: 'index.html',
		inject: 'body'
	})
];

console.log('NODE_ENV:', env);
console.log(`+++${env}+++`);
if (env.includes('production')) {

console.log(plugins + 'in production');
	plugins.push(
		new UglifyJSPlugin(),
		new OptimizeJsPlugin({
			sourceMap: false
		})
	);
}

console.log(plugins);

module.exports = {
	entry: ['react-hot-loader/patch', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			}
		]
	},
	plugins: plugins
};