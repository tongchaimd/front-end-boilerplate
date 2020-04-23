const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
	contentBase: './dist',
	open: true,
	hot: true,
	overlay: true,
    },
    output: {
	filename: 'main.js',
	path: path.resolve(__dirname, 'dist'),
    },
};
