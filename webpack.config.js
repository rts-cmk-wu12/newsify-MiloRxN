const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPages = ["index", "inbox", "archive", "settings"];

module.exports = {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin(),
        ...htmlPages.map(page => new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/pages", `${page}.html`),
            filename: `${page}.html`
        }))
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]
            },
            {
                test: /\.(png|jpe?g)$/i,
                type: "asset",
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/"
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.sharpMinify,
                    options: {
                        encodeOptions: {
                            jpeg: { quality: 20 },
                            png: { quality: 20, compressionLevel: 9 }
                        }
                    }
                }
            })
        ]
    },
    devtool: "source-map",
    devServer: {
        static: "./src"
    }
};
