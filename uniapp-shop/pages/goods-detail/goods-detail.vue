<template>
	<view>
		<view id="swiper">
			<swiper indicator-dots autoplay circular>
				<swiper-item v-for="swiper in swipers" >
					<image :src="swiper"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="recommend_list_item_price">
			<text class="recommend_list_item_newPrice">{{ goodsInfo.newPrice }}</text>
			<text class="recommend_list_item_oldPrice">{{ goodsInfo.oldPrice }}</text>
		</view>
		<view id="describe">{{ goodsInfo.describe }}</view>
		<view id="save">
			<view>货号：SD7151031</view>
			<view>库存：371</view>
		</view>
		<view id="detail">
			<text id="detail_say">详细介绍：</text>
			外形外观：大气美观，大小适中，厚度良好！
			屏幕音效：清晰度很高，屏幕很大。
			拍照效果：像素高，成像好，色彩丰富！
			运行速度：很快，不错，老人用着蛮好的！
			待机时间：很不错，五千毫安电池可以用很久！电耗很低！
			其他特色：千元以内的老人或者学生用着很不错，运行速度很快，这个配置基本够用！综合对比中等偏上！
		</view>
		<view id="uni_goods_nav">
			<uniGoodsNav></uniGoodsNav>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			 uniGoodsNav
			},
		data() {
			return {
				swipers:[
					'https://img14.360buyimg.com/n7/jfs/t1/98337/7/16737/99190/5e7ee2b3E31c75344/5eda01154a26bb03.jpg',
					'https://img11.360buyimg.com/n7/jfs/t1/50936/8/475/152571/5cda626cE2e71098a/aeb0dae88b285bb9.jpg',
				  'https://img14.360buyimg.com/n7/jfs/t1/104453/15/14530/266085/5e685785E173f4a52/d9861b06e8ae3a9e.jpg',
					'https://img10.360buyimg.com/n7/jfs/t1/132294/2/13320/210883/5f91a843Efb6f991a/f0ff542da6f4751a.jpg',
				],
				goodsInfo:{}
			}
		},
		methods: {
			
		},
		onLoad(option) {
			this.goodsInfo = JSON.parse(JSON.stringify(option));
		}
	}
</script>

<style>
	swiper {
		height: 800rpx;
	}
	swiper-item {
		height: 100%;
	}
	swiper image {
		height: 100%;
		margin: 0 auto;
		display: block;
	}

	.recommend_list_item_price {
		margin: 20rpx 0 20rpx 40rpx;
	}
	.recommend_list_item_newPrice {
		text-align: left;
		color: red;
		font-size: 44rpx;
	}
	
	.recommend_list_item_oldPrice {
		text-decoration:line-through;
		color: #CCCCCC;
		margin-left: 20rpx;
	}
	
	#describe {
		padding-left: 40rpx;
		padding-bottom: 20rpx;
		border-bottom: 10rpx solid #EEEEEE;
		margin: 0 auto;
	}
	
	#save {
		padding-left: 40rpx;
		padding-bottom: 20rpx;
		padding-top: 20rpx;
		border-bottom: 10rpx solid #EEEEEE;
	}
  
	#detail {
		padding: 20rpx 40rpx 100rpx 40rpx; 
		font-size: 40rpx;
	}
	#detail_say {
		font-size: 45rpx;
		margin-bottom: 8rpx;
		display: block;
	}
	
	#uni_goods_nav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
