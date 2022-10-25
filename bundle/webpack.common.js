const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const listOfComponents = ['index', 'update']

const htmlGenerators = listOfComponents.reduce((entries, componentName) => {
    entries.push(new HtmlWebpackPlugin({
        template: 'template.html',
        inject: true,
        chunks: [componentName], 
        filename: `${componentName}.html`
    }))

    return entries
})

module.exports = {
    entry: {
       index: "./src/index.js",
       update: "./src/update.js/"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../build")
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...htmlGenerators,
        new MiniCssExtractPlugin({
            linkType: "text/css"
        })
    ],
    module: {
        rules: [
            {
                       // regular expression
                test: /\.(css|sass|scss)/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|webp|gif|heic)$/i, 
                type: "asset/resource"
            },
            {
                test: /\.js$/i,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
