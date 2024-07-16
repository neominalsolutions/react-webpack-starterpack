const path = require('path'); // CommonJS
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx', // hangi dosya üzerinden uygulama boostrapt edilecek
	output: {
		filename: 'bundle.js', // hangi isimde uygulama çıktısı oluşacak
		path: path.resolve(__dirname, 'dist'), // hangi dizin altına uygulama dağıtım için çıkırılacak.
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'], // çıktı tipleri tsx,ts
	},
	plugins: [new HtmlWebPackPlugin({ template: './src/index.html' })],
};
