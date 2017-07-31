<template>
<div>
		<div class="room-list-container rooms"v-for="n in livepartitions">
	    <div class="title-ctnr">
	        <div class="title-row f-clear" >
	            <div class="f-left"><span slot="topLeft" class="live-class-icon" style="background-image: url();">{{n.partition.name}}</span></div>
	            <div class="f-right"><a slot="topRight" class="link" href="/pages/h5/area?id=9&amp;name=绘画专区"><span class="right-arrow icon">进去看看</span></a></div>
	        </div>
	    </div>
	    <div class="block-ctnr" >
	        <a v-for="(obj,index) in n.lives.slice(0,limit)" class="room-card" _v-51f62538=""  @click="test(obj)" :href="'#/livedetali/'+obj.room_id">
	            <div class=" cover-wrap" _v-51f62538="">
	                <div class="cover" _v-51f62538="" style="opacity: 1;"><img _v-51f62538=""  src="https://i0.hdslb.com/bfs/live/ff3c33bbbfe4a1c905519c300112138c1468bcf0.jpg"><span class="hostname" _v-51f62538="">{{obj.owner.name}}</span><span class="viewers-count eye icon" _v-51f62538="">{{obj.online}}</span></div>
	            </div>
	            <div class="title-container" _v-51f62538=""><span class="title" _v-51f62538="">{{obj.title}}</span></div>
	        </a>
	    </div>
	</div>
</div>

</template>
<script>
	export default{
		data() {
        return {
          //news: null,
          isLoadMore: true
        }
      },
      computed:{
      	livepartitions(){
      		return this.$store.state.livepartitions
      	},
        limit(){
          return this.$store.state.limit
        }     	
      },
      methods:{
        test(e){
          this.$store.state.index=e
        },
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
<style>
	/*.live-main,.rooms,.right-arrow,.icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFW…5qiheyJ2i02Zpi6EjvgXX+SC/b+n+kt88LHT0nykd6ZwIMAD99jKUhR5YjAAAAAElFTkSuQmCC);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    padding-right: .666666666666667rem;
    color: #919799;
    font-size: .346666666666667rem;
}
.live-main,.rooms,.link {
    text-decoration: none;
    color: #000;
}*/
</style>