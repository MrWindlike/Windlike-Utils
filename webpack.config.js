let webpack = require('webpack');

module.exports = {
    entry: "./index.tsx",
    output: {
        filename: "utils.min.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015']}},
        ]
    },
    plugins: [
    	// UglifyJs build
	    /* new webpack.optimize.UglifyJsPlugin({
	    	compress: {
	    		warnings: false,
                drop_console: true
	    	}
		}) */
	]
};