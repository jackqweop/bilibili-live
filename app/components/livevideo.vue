<template>
	<div>
		<!-- <video controls="controls" autoplay="autoplay" :src="index.playurl">
			 
		</video> -->

		<video id="videoElement" controls autoplay="autoplay" style="
    width: 100%;"></video>

	</div>
</template>

<script>
	
	
	

	export default{
		data(){
			return {
	          //news: null,
	          isLoadMore: true
	        }
		},
		computed:{
			index() {
	        return this.$store.state.index
	        }
		},
		methods:{
			load() {
	          this.$store.dispatch("setLive")
	        },
	        vvv(){
	        	this.$store.state.index = "eeeee"
	        }

		},
		mounted(){
			this.load();
			// console.log(this.$store.state.index,"地址哦哦哦哦哦")
			if (flv.isSupported()) {
		        var videoElement = document.getElementById('videoElement');
		        var flvPlayer = flv.createPlayer({
		            type: 'flv',
		            url:this.$store.state.index.playurl
		        });
		        flvPlayer.attachMediaElement(videoElement);
		        flvPlayer.load();
		        flvPlayer.play();
		    }
		}
	}



</script>
