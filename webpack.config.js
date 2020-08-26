const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    let confObj = {
	mode: 'production',
	entry: './src/index.js',
	plugins: [
	    new HtmlWebpackPlugin(),
	],
	output: {
	    filename: '[name].bundle.js',
	    path: pathTo('dist'),
	    publicPath: '/',
	},
	module: {
	    rules: [
		{
		    test: /\.js$/,
		    loader: 'babel-loader',
		    include: [ pathTo('src') ],
		},
	    ],
	},
    };
    if (
	(env && env.mode === 'development')
	|| (argv && argv.mode === 'development')
    ) {
	confObj = {
	    ...confObj,
	    devtool: 'inline-source-map',
	    devServer: {
		contentBase: './dist',
		open: true,
		hot: true,
		overlay: {
		    errors: true,
		    warnings: true,
		},
	    },
	};
    }
    return confObj;
};

function pathTo(str) {
    return path.resolve(__dirname, str);
}
