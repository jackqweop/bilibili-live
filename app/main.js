//引入vue框架
import Vue from "vue";
//引入路由
import VueRouter from 'vue-router';
//引入vuex状态管理
import Vuex from 'vuex';
import VueResource from 'vue-resource';
//axios的ajax封装库
import axios from "axios";
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper)
Vue.prototype.$ajax = axios;

import './css/index.css';

import flv from'./js/flv.min.js';
window.flv = flv;

import livehome from "./components/routes/livehome.vue";
import livedetali from "./components/routes/livedetali.vue";

var router = new VueRouter({
	routes:[{
		path:'/index',
		component:livehome,
		// children:[{
		// 	path:'livedetali/:room_id',
		// 	component:livedetali
		// }]
	},{
			path:'/livedetali/:room_id',
			component:livedetali
		},{
		path: '/',
		redirect: '/index'
	}]
});

var store = new Vuex.Store({
	state:{
		limit:4,
		livebanner:[],
		liveentranceIcons:[],
		livepartitions:[],
		index:""
	},
	mutations:{
		
		setLive(state){
			Vue.http.get("http://localhost:8848",{

			})
			.then((response)=>{
				console.log(response.body.data)
				state.livebanner = response.body.data.banner
				state.liveentranceIcons = response.body.data.entranceIcons
				state.livepartitions = response.body.data.partitions
				// console.log(state.livebanner )
				// state.liverecommend_data = response.body.data.recommend_data

			})
			.catch((error)=>{
				console.log(error)
			})
		}
	},
	actions:{
		
		setLive(context){
			context.commit('setLive')
		}
	}
})
new Vue({
	el: "#demo",
	template: `
		<router-view class="app-ctnr"></router-view>
	`,
	router,
	store,
	created() {
		window.scope = this.$store.state
	}
})