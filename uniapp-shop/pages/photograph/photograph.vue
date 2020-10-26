<template>
	<view id="photograph">
		<scroll-view id="photograph_left" scroll-y>
			<view :class="currentId === index?'active': ''" v-for="(item,index) in titleList" @click="selectCurrent(index)">{{ item.cat_name }}</view>
		</scroll-view>
		<scroll-view id="photograph_right" scroll-y>
			<view v-for="item in imgList" class="photograph_right_list">
				<image :src="item.cat_icon" class="photograph_right_list_img" @click="previewImg(item.cat_icon)"></image>
				<view class="photograph_right_list_name">{{ item.cat_name }}</view>
			</view>
			<view v-if="imgList === undefined" id="no_data">暂无数据显示</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleList: [], // 存放左方栏的名字
				currentId: 0,
				imgList: [], // 存放点击左方栏后，右边的图片数据
				imgListSrc: [] // 单独存放imgList中src
			}
		},
		methods: {
			// 获取左方所有数据
			async getDatas() {
				let result = await this.$myRequest({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'
				})
				this.titleList = result.data.message;
				this.imgList = result.data.message[this.currentId].children[0].children;
				this.imgListSrc = this.imgList.map(item=>	item.cat_icon);
			},
			// 当前点击的左方栏，显示右方的图片数据
			selectCurrent(index) {
				this.getDatas();
				this.currentId = index;
			},
			// 预览图片
			previewImg(current) {
				uni.previewImage({
					current,
					urls: this.imgListSrc
				})
			}
				
		},
		onLoad() {
			this.getDatas();
		}
	}
</script>

<style>
	page {
		height: 100%;
	}
	#photograph {
		display: flex;
		height: 100%;
	}
	
	#photograph_left {
		height: 100%;
		width: 200rpx;
		font-size: 30rpx;
	}
	
	#photograph_left view {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		border-right: 1rpx solid #EEEEEE;
		border-bottom: 1rpx solid #EEEEEE;
	}
	
	#photograph_right {
		width: 530rpx;
		margin: 0 auto;
	}
	
	.active {
		background: #f0145a;
		color: white;
	}
	.photograph_right_list {
		border-bottom: 2rpx solid #EEEEEE;
	}
	
	.photograph_right_list_name {
		text-align: center;
		font-size: 40rpx;
	}
	
	.photograph_right_list_img {
		width: 100%;
	}
	
	#no_data {
		font-size: 50rpx;
		text-align: center;
		height: 300rpx;
		line-height: 300rpx;
	}



</style>
