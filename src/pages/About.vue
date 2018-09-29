<template>
	<div class="card">
		<div class="card-header"><h3>{{$t('header.aboutPage')}}</h3></div>
		<div class="card-body">
			<p v-html="$t('aboutText')"></p>
		</div>
		
	</div>
</template>

<script>
export default {
	
}
</script>
