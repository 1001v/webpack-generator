import './assets/scss/_vars.scss'
import 'bootstrap/scss/bootstrap-reboot.scss'
import 'bootstrap/scss/bootstrap.scss'

import './assets/scss/main.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'highlight.js/styles/default.css'

import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import BootstrapVue from 'bootstrap-vue'
import VueHighlightJS from 'vue-highlight.js'
import VueClipboards from 'vue-clipboards'

import App from './App.vue'
import Generator from './pages/Generator.vue'
import About from './pages/About.vue'

import locales from './locales'

Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(BootstrapVue)
Vue.use(VueHighlightJS)
Vue.use(VueClipboards)

const router = new VueRouter({
	mode: 'history',
	routes: [{
		path: '*',
		redirect: '/generator'
	},
	{
		path: '/generator',
		component: Generator
	},
	{
		path: '/about',
		component: About
	}
	]
})


let locale = localStorage.getItem('locale') || (navigator.language || navigator.userLanguage || 'en-US').split('-')[0]

if (!Object.keys(locales).includes(locale)) {
	locale = 'en'
}

const i18n = new VueI18n({
	locale,
	messages: locales,
	fallbackLocale: 'en'
})

new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	router,
	i18n
})