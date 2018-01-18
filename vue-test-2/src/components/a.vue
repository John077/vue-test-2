<template>
	<div id="component-a">
		{{ hello }}
		<button @click="emitMyEvent">emit</button>
  	</div>
</template>

<script>
export default {
	data () {
		return {
			hello: 'i am component A'
		}
	},
	methods: {
		emitMyEvent: function () {
			this.$emit('my-event', this.hello)
		}
	}
}

</script>