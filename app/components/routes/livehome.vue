<template>
	<div>
		<liveheader></liveheader>
		<liveswipe></liveswipe>
		<livelist></livelist>
	</div>
</template>
<script>
	import liveheader from "../liveheader.vue";
	import liveswipe from "../liveswipe.vue";
	import livelist from "../livelist.vue"
	export default{
		components:{
			liveheader,
			liveswipe,
			livelist
		}
	}
</script>