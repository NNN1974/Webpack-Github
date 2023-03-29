const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        port: 4200,
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
        //   {
        //     test: /\.less$/,
        //     use: cssLoaders('less-loader')
        //   },
        //   {
        //     test: /\.s[ac]ss$/,
        //     use: cssLoaders('sass-loader')
        //   },
        //   {
        //     test: /\.(png|jpg|svg|gif)$/,
        //     use: ['file-loader']
        //   },
        //   {
        //     test: /\.(ttf|woff|woff2|eot)$/,
        //     use: ['file-loader']
        //   },
        ]
    }
}
