const path = require('path');

module.exports = {
    entry: './src/day.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "./src/template.html")
        })
    ]
}