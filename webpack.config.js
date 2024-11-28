const path = require('path'); // CommonJS
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx', // hangi dosya üzerinden uygulama boostrapt edilecek
	output: {
		filename: 'bundle.js', // hangi isimde uygulama çıktısı oluşacak
		path: path.resolve(__dirname, 'dist'), // hangi dizin altına uygulama dağıtım için çıkırılacak.
	},
	mode: 'development',
	devServer: {
		// uygulamadaki linkleri tarayıcıdan değiştirip çalıştırıdğımızda path karşılığında sayfalar bulunamayıp 404 hatası veriyor. Bunu engelleyip sayfaların doğru yönlendirilmesi için bu ayarı aktif hale getirdik. tarayıcının history geçmiş bilgisini aktif hale getirdik.
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
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
