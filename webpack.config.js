const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = 'https://1001v.github.io/webpack-generator'

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
		filename: `[name]${isProduction ? '' : ''}.js`,
		publicPath: isProduction ? baseUrl : ''
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
			filename: isProduction ? '404.html' : 'index.html',
			hash: true,
			favicon: './docs/favicon.ico'
		}),
		new BaseHrefWebpackPlugin({ baseHref: isProduction ? baseUrl : '/' }),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: 'vendor.css'
		}),
		new VueLoaderPlugin()
	]
}