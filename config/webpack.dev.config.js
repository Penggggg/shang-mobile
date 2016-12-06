var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        filename: "[name].js",
        path:"./dist"
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            { test: /\.css$/, loader: "style-loader!css-loader?modules" }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin( 'vendor', 'vendor.js' ),
 
        new HtmlWebpackPlugin({
          template: './src/index.html',
          title: 'Shang'
        }), 
 
        new OpenBrowserPlugin({
          url: 'http://localhost:8088'
        }), 
 
        new webpack.DefinePlugin({
           'process.env': {
				'ENV': JSON.stringify('develoption')
			}
        })
    ],

};