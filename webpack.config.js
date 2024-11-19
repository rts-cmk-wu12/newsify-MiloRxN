const { CleanPlugin } = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/i,
                use: [ "style-loader", "css-loader", "sass-loader", "postcss-loader" ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        clean: true,
    },

    entry: {
        index: '/src/index.js',
        login: '/src/login.js',
    }
}