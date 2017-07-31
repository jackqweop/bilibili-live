<template>
	<div>
		<liveheader></liveheader>
		<livevideo></livevideo>
		<liveliuyan></liveliuyan>
	</div>
</template>
<script>
	import liveheader from "../liveheader.vue";
	import livevideo from "../livevideo.vue";
	import liveliuyan from "../liveliuyan.vue"
	export default{
		components:{
			liveheader,
			livevideo,
			liveliuyan
		}
	}
</script>