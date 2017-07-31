<template>
	<!-- <div :options="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="n in livebanner" >
        <img :src="n.banner.img">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div> -->

  <swiper :options="swiperOption" ref="mySwiper">
		
		<swiper-slide v-for="i in imgs" :key="i.id" ><img :src="i.src" />
		</swiper-slide>
		
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		data () {
	      	return {
	        	imgs: [{
					id: 1,
					src: require("../images/1.jpg")
				}, {
					id: 2,
					src: require("../images/2.jpg")
				},{
					id: 3,
					src: require("../images/3.jpg")
				}],
	        	swiperOption: {
	        		autoplay: 3000,
	        	}
	      	}
	    },
	    computed:{
	    	livebanner(){
	    		return this.$store.state.livebanner
	    	}
	    },
	    methods:{
	    	load() {
	          this.$store.dispatch("setLive")
	        },
	        loadMore(){
	        	this.$store.state.limit=10
	        }
	    },
	    mounted() {
        this.load();
        console.log(this.$http)

      }
	}
</script>
<style scoped>
	img{
		width: 100%;
		height: 100%;
	}
	.swiper-container {
    
            padding-top: 32px;
	}
</style>