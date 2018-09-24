const path = require("path");

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                use: [{
                    loader: "handlebars-loader",
                    options: {helperDirs: path.resolve(__dirname, "./js/helpers")}
                }]
            }
        ]
    }
}