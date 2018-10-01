export default {
	name: 'Русский',
	header: {
		generatorPage: 'Генератор',
		aboutPage: 'О программе',
		languageLabel: 'Язык',
	},
	aboutText: 'Этот генератор позволяет создать базовую конфигурацию webpack. Обратите внимание, что эта конфигурация не может быть исчерпывающим решением на все случаи жизни. Вместо этого генератор предоставляет наглядность при формировании конфигурации и описание к каждой опции. Это может быть полезно для новичков в webpack. Пожалуйста, прочитайте <a href="https://webpack.js.org/concepts/" target="_blank">документацию по webpack</a> для получения более подробной информации о каждой опции. Issues и pull requests приветствуются.',
	generatorPage: {
		settingsHeader: 'Настройки',
		configHeader: 'Ваш webpack.config.js',
		instructionHeader: 'Быстрый старт',
		linksHeader: 'Полезные ссылки',
		links: {
			npmdocs: 'Документация по NPM',
			webpackdocs: 'Документация по webpack',
			esmodules: 'О ES модулях'
		},
		saveFile: 'Сохранить webpack.config.js',
		copyFile: 'Скопировать webpack.config.js',
		saveTsConfig: 'Сохранить tsconfig.json',
		copyTsConfig: 'Скопировать tsconfig.json',
		copied: 'Скопировано',
		downloadYour: 'Скачайте ваш',
		andPlaceIt: 'и поместите его рядом с package.json вашего проекта.',
		installDependencies: 'Установите зависимости',
		runWebpack: 'Запустите webpack',
		runDevServer: 'Запустите dev server',
		tabs: {
			main: 'Общее',
			css: 'CSS',
			js: 'JS',
			frameworks: 'Frameworks'
		},
		settings: {
			require: 'Эта опция требует',
			entrySrc: 'Точка входа',
			outputDir: 'Папка назначения',
			bundleName: 'Имя бандла',
			entrySrcPopover: 'Точка входа задает модуль, с которого webpack начинает сборку вашего проекта',
			outputDirPopover: 'Папка назначения задает место, куда webpack поместит сгенерированные бандлы',
			bundleNamePopover: 'Имя бандла указывает, как будет назван собранный бандл',
			sourceMap: 'Sourcemaps',
			sourceMapPopover: 'Эта опция указывает, генерятся ли sourcemaps. На самом деле существует несколько типов sourcemaps, которые можно указать в данной опции, поэтому ознакомьтесь с документацией webpack',
			hash: 'Hash',
			hashPopover: 'Внедрить уникальный хэш в имя выходного файла. Используйте эту опцию при сборке production билда',
			watch: 'Watch',
			mode: 'Mode',
			devServer: 'Dev server',
			devServerPopover: 'Включает поддержку dev server. Dev server хостит скомпилированное приложение и автоматически перезагружает его при изменениях. Обратите внимание, что запуск необходимо производить при помощи команды webpack-dev-server',
			modePopover: 'Данная опция указывает webpack использовать встроенные механизмы оптимизации. Значение по умолчанию - production',
			watchPopover: 'Webpack может следить за файлами и запускать перекомпиляцию когда они изменяются. Если вы используете webpack-dev-server, то слежение включено по умолчанию',
			watchDisabled: 'Данная опция не активна при использовании webpack-dev-server',
			
			vendorBundle: 'Вендорные бандлы',
			vendorBundlePopover: 'Поместить все модули, импортированные из node_modules, в отдельные бандлы (включая css)',
			uglify: 'Сократить код',
			uglifyPopover: 'Сократить и изуродовать код для меньшего размера бандла',
			uglifyDisabled: 'Нет нужды включать эту опцию, когда установлен production mode',

			htmlInject: 'Автовставка в index.html',
			htmlInjectPopover: 'Включение этой опции позволит webpack автоматически вставлять ссылки на все сгенерированные бандлы в ваш index.html. Вы также должны указать путь к вашему index.html шаблону. Просмотрите документацию HTML Webpack Plugin для дополнительной информации',
			htmlInjectPath: 'Путь к шаблону index.html',

			cleanDist: 'Очистка dist',
			cleanDistPopover: 'Автоматически очищать папку dist при каждой компиляции',
			
			enableCss: 'Включить поддержку CSS',
			enableCssPopover: 'Эта опция позволяет импортировать css в ваш код',
			enableCssMinify: 'Включить сжатие CSS',
			enableCssMinifyPopover: 'CSS будет сжат для меньшего размера бандла',
			enableCssExtract: 'Извлечь CSS',
			enableCssExtractPopover: 'Извлечь CSS в отдельный .css бандл. Также создается отдельный бандл с вендорным css, если включена соответствующая опция в секции Общее',
			enableCssSM: 'CSS sourcemaps',
			enableCssSMPopover: 'Создавать sourcemaps для CSS',
			enableCssSMWarning: 'Если вы используете опцию Извлечь CSS, но не используете опцию Включить сжатие CSS, то для появления sourcemaps вы должны включить опцию Sourcemaps в секции JS (что приведет к генерации sourcemaps для js) ¯\\_(ツ)_/¯',
			cssPp: 'CSS препроцессор',
			cssPpPopover: 'Добавить поддержку препроцессора CSS',

			ts: 'Typescript',
			tsPopover: 'Включить поддержку Typescript. Не забудьте скачать tsconfig.json',
			transform: 'Преобразовать в ES5',
			transformPopover: 'Преобразовывает новейший синтаксис javascript в ES5. Обратите внимание, что данная опция работает по-другому при использовании typescript (typescript не требует babel для состаривания кода)'
		}
	},
	message: {
		hello: 'Привет'
	}
}