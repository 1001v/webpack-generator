const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin')

isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	entry: !isProduction ? './src/index.js' : ['@babel/polyfill', './src/index.js'],
	mode: isProduction ? 'production' : 'development',
	optimization: {
		minimize: isProduction,
		minimizer: [
			new UglifyJsPlugin({ exclude: /vendor/ }),
			new OptimizeCSSAssetsPlugin()
		],
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	devtool: isProduction ? '' : 'source-map',
	output: {
		path: path.resolve(__dirname, isProduction ? 'docs': 'dist'),
		filename: `[name]${isProduction ? '.[hash]' : ''}.js`
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: isProduction ? /node_modules/ : /.*/i,
			use: {
				loader: 'babel-loader'
			}
		}, {
			test: /(\.scss|\.sass|\.css)$/,
			use: [
				'vue-style-loader',
				isProduction ? MiniCssExtractPlugin.loader : {
					loader: 'style-loader',
					options: {
						sourceMap: !isProduction
					}
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: !isProduction
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: !isProduction
					}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: !isProduction
					}
				}
			]
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['dist', 'docs'], {
			exclude: ['favicon.ico']
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: isProduction ? 'index.html' : 'index.html',
		}),
		new BaseHrefWebpackPlugin({ baseHref: isProduction ? 'https://1001v.github.io/webpack-generator' : '/' }),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: 'vendor.[hash].css'
		}),
		new VueLoaderPlugin()
	]
}