const path = require('path');

module.exports = (env, argv) => {
    let confObj = {
	mode: 'production',
	entry: './src/index.js',
	output: {
	    filename: 'main.js',
	    path: pathTo('dist'),
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
