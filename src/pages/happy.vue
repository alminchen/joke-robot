<template>
	<div class="page page-happy">
		<page-header :pageType ="pageType" />
		<nav class="page-happy-nav">
			<div class="top-bar">
				<a :class="{activeType:happyType == HAPPY_TYPE.IMAGE}" @click="changeType(HAPPY_TYPE.IMAGE)"><span>趣图</span></a>
				<a :class="{activeType:happyType == HAPPY_TYPE.TEXT}" @click="changeType(HAPPY_TYPE.TEXT)"><span>段子</span></a>
			</div>
		</nav>
		<ul class="posts-list" v-scroll='loadMore'>
			<li class="happy-item" v-for="item in list">
				<div class="happy-item-title">
					<img :src="randomImg()" alt="">
					<p class="happy-item-name">{{randomFont()}}</p>
				</div>
				<div class="happy-item-content">
					{{item.content}}
					<img :src="item.url" alt="" v-show ="item.url">
					}
				</div>
			</li>
		</ul>
		<load-more :loading ="loading"></load-more>
		<go-top/>
	</div>
</template>
<script>
	import pageHeader from "../components/Header";
	import loadMore from '../components/LoadMore';
	import goTop from '../components/GoTop';
	import {PAGE_TYPE} from '../common/constant/constant';
	import {HAPPY_TYPE} from '../common/constant/constant';
	import random from '../common/util/random';
	import {HappyListCache} from '../cache/cache';
	var scrollDisable = false;
	export default {
		name:'happy',
		data(){
			return {
				PAGE_SIZE:10,
				HAPPY_TYPE:HAPPY_TYPE,
				pageType:PAGE_TYPE.HAPPY_PAGE,
				happyType:HAPPY_TYPE.TEXT,
				loading:false,
				page:1,
				list:[]
			}
		},
		created(){
			this.getHappyList();
		},
		watch:{
			"happyType"(value){
				this.getHappyList(true)
			}
		},
		methods:{
			randomFont(){
				return random.randomFont(3,10);
			},
			randomImg(){
				return './static/images/'+random.randomNum(1,28)+'.jpg';
			},
			changeType(val){
				this.happyType = val;
				this.page = 1
			},
			getHappyList(isClear){
				this.loading = true;
				if (isClear) {
					this.list = []
				}
				HappyListCache.getHappyList({pagesize:this.PAGE_SIZE,page:this.page,happyType:this.happyType})
				.then(
						data=>{
							this.list = this.list.concat(data);
							this.loading = false;
							scrollDisable = false;
						}
					)
			},
			loadMore(){
				scrollDisable = true;
				this.page++;
				this.getHappyList();
			}
		},
		components:{
			pageHeader,
			loadMore,
			goTop
		},
		directives:{
			scroll:{
				bind:function(el,binding){
					window.addEventListener("scroll",function(){
						if (document.body.scrollTop + window.innerHeight >= el.clientHeight) {
							if (!scrollDisable) {
								var fnc = binding.value;
								fnc()
							}
						}
					})
				}
			}
		}
	}
</script>
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-happy {
        padding-top: px2rem(88)!important;
    }

    .page-happy-nav{
        padding: 0 px2rem(40);
        height: px2rem(88);
        line-height: px2rem(88);
        background: #fff;
        border-top: 1px solid transparent;
        border-bottom: 1px solid #eaeaea;
        a {
            display: block;
            height: px2rem(88);
            line-height: px2rem(88);
            float: left;
            text-align: center;
            font-weight: 400;
            font-size: 14px;
            width: 49%;
            color: #333;
            &:hover {
                cursor: pointer;
            }
        }

        .activeType {    cursor: pointer;
            border-bottom: 2px solid #ffba15;
        }
    }

    .happy-item {
        margin-top: 15px;
        background: #fff;
        padding: 18px 16px;
        .happy-item-title {
            padding-bottom: 18px;
            height: 40px;
            overflow: hidden;
            zoom: 1;
            img {
                width: 40px;
                height: 40px;
                border-radius: 40px;
                display: inline-block;
                float: left;
            }

            .happy-item-name {
                display: inline-block;
                width: 100px;
                height: 40px;
                float: left;
                color: #8F8F95;
                font-size: 16px;
                margin-left: 20px;
                line-height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                -o-text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .happy-item-content {
            font-size: 16px;
            color: #464646;
            line-height: 150%;
            padding-bottom: 20px;
            img {
                margin-top: 10px;
                width: 100%;
            }
        }

    }
</style>
