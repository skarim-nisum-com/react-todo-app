var webpack = require('webpack');
var path = require('path');

//to setup webpack
module.exports = {
    devtool: 'inline-source',    //To give line numbers in case of errors, debugging..
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['','.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exlude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']    
            }
        ]
    },
    plugins: {
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin
    }
};