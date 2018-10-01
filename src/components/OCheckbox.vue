<template>
	<div class="mb-2">
		<b-form-checkbox :disabled="disabled" size="md" ref="checkbox" v-model="inputValue">{{name}}</b-form-checkbox>
		<b-btn size="sm" variant="outline-primary" class="float-right" v-b-popover.hover="popover"
		:title="name">
			?
		</b-btn>
		<b-btn size="sm" variant="outline-warning" v-if="disabled && warning" class="float-right mr-1" v-b-popover.hover="warning"
		:title="name">
			!
		</b-btn>
	</div>
</template>


<script>
export default {
	props: ['value', 'name', 'popover', 'disabled', 'warning'],
	data() {
		return {
			inputValue: this.value
		}
	},
	watch: {
		inputValue(value) {
			this.$emit('input', value)
		},
		value(value) {
			this.inputValue = value
		}
	}
}
</script>