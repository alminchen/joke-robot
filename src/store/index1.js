import Vue from 'vue';
import Vuex from 'vuex';
import tool from '../common/util/tool';
import {USER_TYPE} from '../common/constant/constant';
Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		messages:[
			 {
                key: tool.getTimestamp(), //列表key
                type: USER_TYPE.ROBOT, //类型
                value: '你好，您有什么需要，可以直接和我对话😁', //内容
                userId: '' //信息发送者
            },
            {
                key: tool.getTimestamp(), //列表key
                type: USER_TYPE.ROBOT, //类型
                value: '可以问我，天气、出行、各种问题😄', //内容
                userId: '' //信息发送者
            },
            {
                key: tool.getTimestamp(), //列表key
                type: USER_TYPE.ROBOT, //类型
                value: '只有你想不到的，没有我答不来的，哈哈哈😁', //内容
                userId: '' //信息发送者
            },
		],
		userId:tool.getTimestamp();
	},
	getters:{
		getMessages:state=>{
			return state.messages || [];
		},
		getUserId:state=>{
			return state.userId
		}
	},
	mutations:{
		pushMassages:(state,message)=>{
			state.messages.push(message)
		},
		clearMassages:state=>{
			state.messages = [];
		},
		setLoading:(state,message)=>{
			state.loading = loading
		}
	},
	actions:{
		pushMassages:({
			commit
		},messages)=>{
			return new Promise(function(resolve,reject){
				commit('pushMassages',message);
				resolve();
			})
		},
		clearMassages:({
			commit
		})=>{
			return new Promise(function(resolve,reject){
				commit("clearMassages")
				resolve();
			})
		},
	}
})