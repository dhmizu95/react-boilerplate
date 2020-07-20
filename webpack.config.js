const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html',
});

module.exports = {
	entry: './src',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	devtool: process.env.development
		? 'eval-cheap-module-source-map'
		: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [htmlPlugin],
};
