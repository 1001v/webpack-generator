<template>
	<div v-cloak>
		<b-navbar toggleable="md" type="dark" variant="primary">

			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand tag="h1" class="mb-0">Webpack Generator</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item to="/generator">{{$t('header.generatorPage')}}</b-nav-item>
					<b-nav-item to="/project">{{$t('header.aboutPage')}}</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-nav-item target="_blank" href="https://github.com/1001v/webpack-generator">GitHub</b-nav-item>
					<b-nav-item-dropdown :text="$t('header.languageLabel')" right>
						<b-dropdown-item @click="setLocale(index)" :disabled="$i18n.locale === index" v-for="(locale, index) in $i18n.messages"
						 :key="`Locale-${index}`">{{locale.name}}</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<div class="container-fluid mt-3">
			<router-view></router-view>
		</div>
		<footer class="footer text-center">
			<div class="container">
				<span class="text-muted">Created by 1001v</span>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},

		methods: {
			setLocale(locale) {
				this.$i18n.locale = locale
				localStorage.setItem('locale', locale)
			}
		}
	};
</script>

<style lang="scss">
</style>