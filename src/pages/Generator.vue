<template>
	<div class="row">
		<div class="col-md-3 mb-1">
			<div class="card">
				<div class="card-header">{{$t('generatorPage.settingsHeader')}}</div>
				<div class="card-body">
					<b-tabs nav-class="mb-3">
						<b-tab :title="$t('generatorPage.tabs.main')" active>
							<label>{{$t('generatorPage.settings.entrySrc')}}:</label>
							<b-input-group class="mb-2">
								<b-form-input :state="entrySrc ? null : false" v-model="entrySrc"></b-form-input>
								<b-input-group-text v-b-popover.hover="$t('generatorPage.settings.entrySrcPopover')" :title="$t('generatorPage.settings.entrySrc')"
								 slot="append">
									<strong class="text-primary">?</strong>
								</b-input-group-text>
							</b-input-group>
							<label>{{$t('generatorPage.settings.outputDir')}}:</label>
							<b-input-group class="mb-2">
								<b-form-input :state="outputDir ? null : false" v-model="outputDir"></b-form-input>
								<b-input-group-text v-b-popover.hover="$t('generatorPage.settings.outputDirPopover')" :title="$t('generatorPage.settings.outputDir')"
								 slot="append">
									<strong class="text-primary">?</strong>
								</b-input-group-text>
							</b-input-group>
							<label>{{$t('generatorPage.settings.bundleName')}}:</label>
							<b-input-group class="mb-3">
								<b-form-input :state="bundleName ? null : false" v-model="bundleName"></b-form-input>
								<b-input-group-text v-b-popover.hover="$t('generatorPage.settings.bundleNamePopover')" :title="$t('generatorPage.settings.bundleName')"
								 slot="append">
									<strong class="text-primary">?</strong>
								</b-input-group-text>
							</b-input-group>
							<o-checkbox v-model="hash" :name="$t('generatorPage.settings.hash')" :popover="$t('generatorPage.settings.hashPopover')" />
							<o-checkbox :warning="$t('generatorPage.settings.watchDisabled')" :disabled="devServer" v-model="watch" :name="$t('generatorPage.settings.watch')"
							 :popover="$t('generatorPage.settings.watchPopover')" />
							<o-checkbox v-model="devServer" :name="$t('generatorPage.settings.devServer')" :popover="$t('generatorPage.settings.devServerPopover')" />
							<o-checkbox v-model="vendorBundle" :name="$t('generatorPage.settings.vendorBundle')" :popover="$t('generatorPage.settings.vendorBundlePopover')" />
							<o-checkbox v-model="cleanDist" :name="$t('generatorPage.settings.cleanDist')" :popover="$t('generatorPage.settings.cleanDistPopover')" />
							<o-checkbox v-model="htmlInject" :name="$t('generatorPage.settings.htmlInject')" :popover="$t('generatorPage.settings.htmlInjectPopover')" />
							<div v-show="htmlInject">
								<label>{{$t('generatorPage.settings.htmlInjectPath')}}:</label>
								<b-input-group class="mb-2">
									<b-form-input :state="htmlInjectPath ? null : false" :disabled="!htmlInject" v-model="htmlInjectPath"></b-form-input>
								</b-input-group>
							</div>
							<label v-if="false">{{$t('generatorPage.settings.mode')}}:</label>
							<b-input-group v-if="false" class="mb-2">
								<b-form-select v-model="mode" :options="[{ value: 'none', text: 'none' }, { value: 'development', text: 'development' }, { value: 'production', text: 'production'}]" />
								<b-input-group-text v-b-popover.hover="$t('generatorPage.settings.modePopover')" :title="$t('generatorPage.settings.mode')"
								 slot="append">
									<strong class="text-primary">?</strong>
								</b-input-group-text>
							</b-input-group>
						</b-tab>
						<b-tab :title="$t('generatorPage.tabs.css')">
							<o-checkbox v-model="css.enable" :name="$t('generatorPage.settings.enableCss')" :popover="$t('generatorPage.settings.enableCssPopover')" />
							<o-checkbox :disabled="!css.enable" v-model="css.extract" :name="$t('generatorPage.settings.enableCssExtract')"
							 :popover="$t('generatorPage.settings.enableCssExtractPopover')" />
							<o-checkbox :disabled="!(css.enable && css.extract)" v-model="css.minify" :name="$t('generatorPage.settings.enableCssMinify')"
							 :popover="$t('generatorPage.settings.enableCssMinifyPopover')" />
							<o-checkbox :warning="css.enable && !cssSMAvailable && $t('generatorPage.settings.enableCssSMWarning')"
							 :disabled="!(css.enable && cssSMAvailable)" v-model="css.sourceMap" :name="$t('generatorPage.settings.enableCssSM')"
							 :popover="$t('generatorPage.settings.enableCssSMPopover')" />
							<label>{{$t('generatorPage.settings.cssPp')}}:</label>
							<b-input-group class="mb-2">
								<b-form-select :disabled="!css.enable" v-model="css.pp" :options="[{ value: 'none', text: 'none' }, { value: 'sass', text: 'sass/scss' }, { value: 'less', text: 'less'}, { value: 'stylus', text: 'stylus'}]" />
								<b-input-group-text v-b-popover.hover="$t('generatorPage.settings.cssPpPopover')" :title="$t('generatorPage.settings.cssPp')"
								 slot="append">
									<strong class="text-primary">?</strong>
								</b-input-group-text>
							</b-input-group>
						</b-tab>
						<b-tab :title="$t('generatorPage.tabs.js')">
							<o-checkbox v-model="sourceMap" :name="$t('generatorPage.settings.sourceMap')" :popover="$t('generatorPage.settings.sourceMapPopover')" />
							<o-checkbox :warning="$t('generatorPage.settings.uglifyDisabled')" :disabled="mode === 'production'" v-model="uglify"
							 :name="$t('generatorPage.settings.uglify')" :popover="$t('generatorPage.settings.uglifyPopover')" />
							<o-checkbox v-model="js.transform" :name="$t('generatorPage.settings.transform')" :popover="$t('generatorPage.settings.transformPopover')" />
							<o-checkbox v-model="js.jsx" :name="$t('generatorPage.settings.jsx')" :popover="$t('generatorPage.settings.jsxPopover')" />
							<o-checkbox v-model="js.ts" :name="$t('generatorPage.settings.ts')" :popover="$t('generatorPage.settings.tsPopover')" />
						</b-tab>
						<b-tab :title="$t('generatorPage.tabs.frameworks')">
							<o-checkbox v-model="fm.vue" :name="$t('generatorPage.settings.vue')" :popover="$t('generatorPage.settings.vuePopover')" />
							<o-checkbox v-model="js.jsx" :name="$t('generatorPage.settings.react')" :popover="$t('generatorPage.settings.reactPopover')" />
						</b-tab>
					</b-tabs>
				</div>
			</div>
		</div>
		<div class="col-md-5 mb-1">
			<div class="card">
				<div class="card-header">
					<b-tabs v-model="tabIndex" pills content-class="d-none">
						<b-tab title="webpack.config.js" active>
						</b-tab>
						<b-tab :disabled="!js.ts" title="tsconfig.json">
						</b-tab>
					</b-tabs>

				</div>
				<div class="card-body card-scollable">
					<highlight-code v-show="tabIndex === 0" lang="javascript">{{webpackConfig}}</highlight-code>
					<highlight-code v-show="tabIndex === 1" lang="json">{{tsConfig}}</highlight-code>
				</div>
				<div class="card-footer text-center">
					<b-button-group v-show="tabIndex === 0" class="mb-2 px-5">
						<b-button @click="saveFile()" variant="outline-primary">{{$t('generatorPage.saveFile')}}</b-button>
						<b-button v-clipboard="webpackConfig" @click="alertCountdown = 2" variant="outline-primary">{{$t('generatorPage.copyFile')}}</b-button>
					</b-button-group>
					<b-button-group v-show="tabIndex === 1 && js.ts" class="mb-2 px-5">
						<b-button v-if="js.ts" @click="saveTsConfig()" variant="outline-primary">{{$t('generatorPage.saveTsConfig')}}</b-button>
						<b-button v-if="js.ts" v-clipboard="tsConfig" @click="alertCountdown = 2" variant="outline-primary">{{$t('generatorPage.copyTsConfig')}}</b-button>
					</b-button-group>
					<b-alert fade :show="alertCountdown" dismissible variant="success" @dismissed="alertCountdown = 0"
					 @dismiss-count-down="countdown => alertCountdown = countdown">{{$t('generatorPage.copied')}}!</b-alert>
				</div>
			</div>
		</div>
		<div class="col-md-4 mb-1">
			<div class="card mb-2">
				<div class="card-header">{{$t('generatorPage.instructionHeader')}}</div>
				<div class="card-body">
					<ul class="list-group">
						<li class="list-group-item">{{$t('generatorPage.downloadYour')}} <strong class="text-primary" @click="saveFile()">webpack.config.js</strong>
							{{$t('generatorPage.andPlaceIt')}}</li>
						<li v-if="js.ts" class="list-group-item list-group-item-warning">{{$t('generatorPage.downloadYour')}} <strong
							 class="text-primary" @click="saveTsConfig()">tsconfig.json</strong>
							{{$t('generatorPage.andPlaceIt')}}</li>
						<li class="list-group-item">{{$t('generatorPage.installDependencies')}}:
							<br>
							<code>
								{{npmInstall}}
							</code>
						</li>
						<li v-show="devServer" class="list-group-item">
							{{$t('generatorPage.runDevServer')}}:
							<br>
							<code>
								npx webpack-dev-server --config webpack.config.js
							</code>
						</li>
						<li class="list-group-item">
							{{$t('generatorPage.runWebpack')}}:
							<br>
							<code>
								npx webpack --config webpack.config.js
							</code>
						</li>
					</ul>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					{{$t('generatorPage.linksHeader')}}
				</div>
				<div class="card-body">
					<ul class="list-group">
						<li class="list-group-item">
							<a target="_blank" href="https://webpack.js.org/concepts/">{{$t('generatorPage.links.webpackdocs')}}&nbsp;&#128279;</a>
						</li>
						<li class="list-group-item">
							<a target="_blank" href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">{{$t('generatorPage.links.esmodules')}}&nbsp;&#128279;</a>
						</li>
						<li class="list-group-item">
							<a target="_blank" href="https://docs.npmjs.com">{{$t('generatorPage.links.npmdocs')}}&nbsp;&#128279;</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import beautify from 'js-beautify'
	import dTable from '../dTable'
	import {
		saveAs
	} from 'file-saver/FileSaver'

	import OCheckbox from '../components/OCheckbox.vue'

	export default {
		components: {
			OCheckbox
		},
		data() {
			return {
				tabIndex: 0,
				alertCountdown: 0,
				entrySrc: './src/index.js',
				outputDir: 'dist',
				bundleName: 'main',
				hash: false,
				sourceMap: false,
				watch: false,
				vendorBundle: false,
				uglify: false,
				html: false,
				cleanDist: '',
				mode: 'none',
				devServer: false,
				htmlInject: false,
				htmlInjectPath: './src/index.html',
				dTable,
				css: {
					enable: false,
					sourceMap: false,
					extract: false,
					name: '',
					hash: true,
					minify: false,
					pp: 'none'
				},
				js: {
					transform: false,
					ts: false,
					jsx: false
				},
				fm: {
					vue: false
				}
			}
		},

		methods: {
			saveFile() {
				let blob = new Blob([this.webpackConfig], {
					type: 'text/plain;charset=utf-8'
				})
				saveAs(blob, 'webpack.config.js')
			},

			saveTsConfig() {
				let blob = new Blob([this.tsConfig], {
					type: 'text/plain;charset=utf-8'
				})
				saveAs(blob, 'tsconfig.json')
			}
		},

		computed: {
			webpackConfig() {
				return beautify.js(
					`${this.imports}
					module.exports={
						entry:'${this.entrySrc}',
						output:{
							path: path.resolve(__dirname,'${this.outputDir}'),
							filename:'${this.bundleName}${this.hash ? '.[hash]' : ''}${
	this.uglify ? '.min' : ''
}.js',
							${
	this.vendorBundle
		? `chunkFilename: '[name]${this.hash ? '.[hash]' : ''}${
			this.uglify ? '.min' : ''
		}.js',`
		: ''
}
						},
						${this.sourceMap ? 'devtool: \'source-map\',' : ''}
						${this.watch && !this.devServer ? 'watch: true,' : ''}
						${
	this.watch || this.devServer
		? 'watchOptions: {ignored: /node_modules/},'
		: ''
}
						${this.mode !== 'production' ? `mode: '${this.mode}',` : ''}
						${
	this.devServer
		? `devServer: { contentBase: path.join(__dirname, '${
			this.outputDir
		}'), hot: true },`
		: ''
}
						${
	this.vendorBundle || this.optimizeCss || this.uglify
		? `
							optimization: {
								${
	this.mode !== 'production' && (this.uglify || this.css.minify)
		? 'minimize: true,'
		: ''
}
								${
	this.uglify || this.optimizeCss
		? `minimizer: [\n
									${
	this.uglify && this.mode !== 'production'
		? `new TerserPlugin(${
			this.sourceMap ? '{ sourceMap: true }' : ''
		}),\n`
		: ''
}
								 	${
	this.optimizeCss
		? `new OptimizeCSSAssetsPlugin(${
			this.css.sourceMap
				? '{cssProcessorOptions:{map:{inline:false,annotation:true}}}'
				: ''
		}),\n`
		: ''
}
								 ],`
		: ''
}
								${
	this.vendorBundle
		? 'splitChunks:{cacheGroups: {commons: {test: /[\\/]node_modules[\\/]/,name: \'vendor\',chunks: \'all\'}}},\n'
		: ''
}
							},`
		: ''
}			${this.rules ? `module: {rules: [${this.rules}]},` : ''}
						${this.resolve.length > 1 ? `resolve: { extensions: [${this.resolve.join(',')}] },` : ''}
						${this.plugins ? `plugins: [\n ${this.plugins} ]` : ''}
					};`, {
						max_preserve_newlines: 1
					}
				)
			},

			optimizeCss() {
				return this.css.enable && this.css.extract && this.css.minify
			},
			cssRegex() {
				if (this.css.enable) {
					if (this.css.pp === 'sass') {
						return '/(.sass|.scss|.css)$/'
					} else if (this.css.pp === 'less') {
						return '/(.less|.css)$/'
					} else if (this.css.pp === 'stylus') {
						return '/(.styl|.css)$/'
					} else {
						return '/(.css)$/'
					}
				}
				return ''
			},

			cssSMAvailable() {
				return (
					!this.css.extract ||
					(this.css.extract && (this.optimizeCss || this.sourceMap))
				)
			},

			tsConfig() {
				return beautify.js(
					`{
							"compilerOptions": {
									"outDir": "${this.outputDir}",
									${this.sourceMap ? '"sourceMap": true,' : ''}
									"noImplicitAny": true,
									"module": "commonjs",
									"experimentalDecorators": true,
									"target": ${this.js.transform ? '"ES5"' : '"ESNext"'},
									${this.js.jsx ? '"jsx": "react",' : ''}
									"allowJs": true
								}
							}`, {
						max_preserve_newlines: 1
					}
				)
			},

			resolve() {
				let list = ['\'.js\'', '\'.json\'']
				if (this.js.jsx) {
					list.push('\'.jsx\'')
				}
				if (this.js.ts) {
					list.push('\'.ts\'')
					if (this.js.jsx) {
						list.push('\'.tsx\'')
					}
				}
				if (this.fm.vue) {
					list.push('\'.vue\'')
				}

				return Array.from(new Set(list))
			},

			dependencies() {
				let list = ['webpack', 'webpack-cli']
				if (this.devServer) {
					list.push('webpack-dev-server')
				}
				if (this.uglify && this.mode !== 'production') {
					list.push('terser-webpack-plugin')
				}
				if (this.optimizeCss) {
					list.push('optimize-css-assets-webpack-plugin')
				}
				if (this.htmlInject) {
					list.push('html-webpack-plugin')
				}
				if (this.cleanDist) {
					list.push('clean-webpack-plugin')
				}
				if (this.css.enable) {
					if (this.css.extract) {
						list.push('mini-css-extract-plugin')
					} else {
						list.push('style-loader')
					}
					if (this.css.pp === 'sass') {
						list.push('node-sass', 'sass-loader')
					}
					if (this.css.pp === 'less') {
						list.push('less', 'less-loader')
					}
					if (this.css.pp === 'stylus') {
						list.push('stylus-loader', 'stylus')
					}
					list.push('css-loader')
				}
				if (this.js.ts) {
					list.push('typescript', 'ts-loader')
					if (this.js.jsx) {
						list.push('@types/react')
					}
					if (this.fm.vue) {
						list.push('@types/vue')
					}
				}
				if ((this.js.transform || this.js.jsx) && !this.js.ts) {
					list.push('babel-loader', '@babel/core')
					if (this.js.transform) {
						list.push('@babel/preset-env')
					}
					if (this.js.jsx) {
						list.push('@babel/preset-react')
					}
				}
				if (this.fm.vue) {
					list.push('vue-loader', 'vue-template-compiler')
					if (this.css.enable) {
						list.push('vue-style-loader')
					}
					if (this.js.ts) {
						list.push('vue-class-component', 'vue-property-decorator')
					}
				}
				return Array.from(new Set(list))
			},

			imports() {
				let list = ['path']
				if (this.devServer) {
					list.push('webpack')
				}
				if (this.uglify && this.mode !== 'production') {
					list.push('terser-webpack-plugin')
				}
				if (this.optimizeCss) {
					list.push('optimize-css-assets-webpack-plugin')
				}
				if (this.htmlInject) {
					list.push('html-webpack-plugin')
				}
				if (this.cleanDist) {
					list.push('clean-webpack-plugin')
				}
				if (this.css.enable && this.css.extract) {
					list.push('mini-css-extract-plugin')
				}
				if (this.fm.vue) {
					list.push('vue-loader')
				}
				return Array.from(new Set(list))
					.map(i => `const ${dTable[i]} = require('${i}');`)
					.join('')
			},

			rules() {
				let list = []
				if (this.css.enable) {
					list.push(
						`{
						test: ${this.cssRegex},
						use: [
							{ 
								loader: ${this.css.extract ? 'MiniCssExtractPlugin.loader' : (this.fm.vue ? '\'vue-style-loader\'' : '\'style-loader\'')}
								${
	this.css.sourceMap && this.cssSMAvailable && !this.css.extract
		? ', options: { sourceMap: true }'
		: ''
}
							 },
							 { 
								loader: 'css-loader'
								${
	this.css.sourceMap && this.cssSMAvailable
		? ', options: { sourceMap: true }'
		: ''
}
							 }
							 ${
	this.css.pp !== 'none'
		? `, {
								 loader: '${this.css.pp}-loader'
								 ${
	this.css.sourceMap && this.cssSMAvailable
		? ', options: { sourceMap: true }'
		: ''
}
							 }`
		: ''
}
						]
					}`
					)
				}
				if (this.js.ts) {
					list.push(
						`{
									test: /\.ts${this.js.jsx ? 'x?' : ''}$/,
									use: ${this.fm.vue ? '[ {loader: \'ts-loader\', options: { appendTsSuffixTo: [/\.vue$/] }}]' : '\'ts-loader\''},
									exclude: /node_modules/
							}`
					)
				}
				if ((this.js.transform || this.js.jsx) && !this.js.ts) {
					let presets = []
					if (this.js.transform) {
						presets.push('\'@babel/preset-env\'')
					}
					if (this.js.jsx) {
						presets.push('\'@babel/preset-react\'')
					}
					list.push(
						`{
								test: /\.js${this.js.jsx ? 'x?' : ''}$/,
								exclude: /node_modules/,
								use: {
									loader: 'babel-loader',
									options: {
											presets: [${presets.join(',')}]
									}
								}
						}`
					)
				}
				if (this.fm.vue) {
					list.push(`{
					test: /\.vue$/,
					loader: 'vue-loader'
				}`)
				}

				return list.join(',')
			},

			plugins() {
				let list = []
				if (this.devServer) {
					list.push('new webpack.HotModuleReplacementPlugin()')
				}
				if (this.htmlInject) {
					list.push(`new HtmlWebpackPlugin({
						template: '${this.htmlInjectPath}'
					})
				`)
				}
				if (this.cleanDist) {
					list.push(`new CleanWebpackPlugin('${this.outputDir}')`)
				}
				if (this.css.enable && this.css.extract) {
					list.push(
						`
					new MiniCssExtractPlugin({
						filename: '[name]${this.hash ? '.[hash]' : ''}${
	this.optimizeCss ? '.min' : ''
}.css'
						${
	this.vendorBundle
		? `,chunkFilename: 'vendor${this.hash ? '.[hash]' : ''}${
			this.optimizeCss ? '.min' : ''
		}.css'`
		: ''
}
					})
					`
					)
				}
				if (this.fm.vue) {
					list.push('new VueLoaderPlugin()')
				}
				return Array.from(new Set(list)).join(',\n')
			},

			npmInstall() {
				return this.dependencies.length ?
					`npm install ${this.dependencies.join(' ')} --save-dev` :
					''
			}
		}
	}
</script>