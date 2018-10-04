export default {
	name: 'English',
	header: {
		generatorPage: 'Generator',
		aboutPage: 'About',
		languageLabel: 'Language',
	},
	aboutText: 'This generator allows you to create a basic webpack configuration. Please note that this configuration is not an exhaustive solution for all occasions. Instead, the generator provides visual process of configuration and description of each option. This can be useful for beginners in the webpack. Please read the <a href="https://webpack.js.org/concepts/" target="_blank"> webpack documentation</a> for more information about each option. Issues and pull requests are welcome.',
	generatorPage: {
		settingsHeader: 'Settings',
		configHeader: 'Your webpack.config.js',
		instructionHeader: 'Quick start',
		linksHeader: 'Useful links',
		links: {
			npmdocs: 'NPM documentation',
			webpackdocs: 'Webpack documentation',
			esmodules: 'About ES modules'
		},
		saveFile: 'Save webpack.config.js',
		copyFile: 'Copy webpack.config.js',
		saveTsConfig: 'Save tsconfig.json',
		copyTsConfig: 'Copy tsconfig.json',
		copied: 'Copied',
		downloadYour: 'Download your',
		andPlaceIt: 'and place it with your project`s package.json.',
		installDependencies: 'Install dependencies',
		runWebpack: 'Run webpack',
		runDevServer: 'Run dev server',
		tabs: {
			main: 'Main',
			css: 'CSS',
			js: 'JS',
			frameworks: 'Frameworks'
		},
		settings: {
			require: 'This option requires',
			entrySrc: 'Entry point',
			outputDir: 'Output dir',
			bundleName: 'Bundle name',
			entrySrcPopover: 'An entry point indicates which module webpack should use to begin building your project',
			outputDirPopover: 'The output dir property tells webpack where to emit the bundles it creates',
			bundleNamePopover: 'The bundle name property tells webpack how to name the bundle',
			sourceMap: 'Sourcemaps',
			sourceMapPopover: 'This option controls if sourcemaps are generated. There are actually several different types of sourcemaps, which you can specify in this option, so check out webpack docs',
			hash: 'Hash',
			hashPopover: 'Insert the unique hash in output filename. Use this when you make production build',
			watch: 'Watch',
			mode: 'Mode',
			devServer: 'Dev server',
			devServerPopover: 'This option enables dev server support. Dev server serves your compiled app and automatically reloads it on changes. Note that you should run this using webpack-dev-server command',
			modePopover: 'Providing the mode configuration option tells webpack to use its built-in optimizations accordingly. Default mode is production',
			watchPopover: 'Webpack can watch files and recompile whenever they change. If you are using webpack-dev-server, watch mode is enabled by default',
			watchDisabled: 'This option doesn\'t work when you use webpack-dev-server',

			vendorBundle: 'Vendor bundles',
			vendorBundlePopover: 'Put all modules imported from node_modules to the separate bundles (including css)',
			uglify: 'Uglify code',
			uglifyPopover: 'Minify and uglify code for less bundle size',
			uglifyDisabled: 'You don\'t need to enable this when production mode is set',

			htmlInject: 'Autoinject to index.html',
			htmlInjectPopover: 'This option controls if webpack generates index.html file with all compiled bundles automatically. You should also provide path to your index.html template. Please check out HTML Webpack Plugin docs for more info and features',
			htmlInjectPath: 'Path to index.html template',

			cleanDist: 'Clean dist folder',
			cleanDistPopover: 'Clean dist folder on each compilation automatically',

			enableCss: 'Enable CSS support',
			enableCssPopover: 'This will allow webpack to handle css import in your code',
			enableCssMinify: 'Minify CSS',
			enableCssMinifyPopover: 'Minify CSS for less file size',
			enableCssExtract: 'Extract CSS',
			enableCssExtractPopover: 'Extract CSS to separate .css bundle. The separate vendor bundle will be created if option Vendor bundle is enabled in Main section',
			enableCssSM: 'CSS sourcemaps',
			enableCssSMPopover: 'Generate sourcemaps for CSS',
			enableCssSMWarning: 'If you use Extract CSS option, but don\'t use Minify CSS option, you need to enable Sourcemaps option in JS section to make sourcemaps be generated (this will cause js sourcemaps to be generated too) ¯\\_(ツ)_/¯',
			cssPp: 'CSS preprocessor',
			cssPpPopover: 'Add CSS preprocessor support',

			ts: 'Typescript',
			tsPopover: 'Enable Typescript support. Don\'t forget to download tsconfig.json',
			transform: 'Transform to ES5',
			transformPopover: 'Transforms your code from latest javascript syntax to ES5. Note that this option works differently if you enable typescript support (typescript doesn\'t use babel to transform your code to ES5)',


			vue: 'Vue.js support',
			vuePopover: 'Allows you to author Vue components in a format called Single-File Components. Don\'t forget to enable CSS support option if you want to use <style> section in Vue components. This option is compatible with Typescript support'
		}
	},
	message: {
		hello: 'hello world'
	}
}