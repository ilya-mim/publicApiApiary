const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/src/app.jsx'),

    output: {
        path: path.join(__dirname, '/client/dist/js'),
        filename: 'app.js',
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                include: path.join(__dirname, '/client/src'),
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["env", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },

    watch: true
};