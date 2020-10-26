<template>
	<view>
		<!-- 轮播图 -->
		<view id="swiper">
			<swiper indicator-dots autoplay circular>
				<swiper-item v-for="swiper in swipers" :key="swiper.goods_id">
					<image :src="swiper.image_src"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 导航栏 -->
		<view id="nav">
			<view class="nav_item" @click="toSupermarket">
				<view class="iconfont icon-gouwu nav_item_iconfont" ></view>
				<view class="nav_item_title">超市</view>
			</view>
			<view class="nav_item" @click="toContact">
				<view class="iconfont icon-lianxi nav_item_iconfont" ></view>
				<view class="nav_item_title">关于我们</view>
			</view>
			<view class="nav_item" @click="toPhotograph">
				<view class="iconfont icon-tupian nav_item_iconfont" ></view>
				<view class="nav_item_title">实物照片</view>
			</view>
			<view class="nav_item" @click="toVideo">
				<view class="iconfont icon-shipin nav_item_iconfont" ></view>
				<view class="nav_item_title">实物视频</view>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view id="recommend">
			<view id="recommend_commodities">推 荐 商 品</view>
			<goodsList :goods="goods"></goodsList>
		</view>
		
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				swipers: [],
				goods:[
					{
					  src: 'https://api-hmugo-web.itheima.net/pyg/banner2.png',
						newPrice: 2888,
						oldPrice: 5766,
						describe: '华为荣耀9'
					},
					{
						src: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/121536/20/2932/151407/5eca81baE517649c3/56d042edf5df0177.jpg',
						newPrice: 3150,
						oldPrice: 5766,
						describe: 'vivo x50'
					},
					{
						src: 'https://img10.360buyimg.com/n7/jfs/t1/116734/6/17578/66338/5f5c3e93E88fad761/8bf870ecd9391d1e.jpg',
						newPrice: 138,
						oldPrice: 190,
						describe: 'MLB美职棒棒球帽男女情侣帽子男经典款韩版弯檐鸭舌帽 NY洋基队太阳帽四季款'
					},
					{
						src: 'https://img14.360buyimg.com/n7/jfs/t1/51156/36/9716/386743/5d6f5300E58d4884e/500310713bcddb63.jpg',
						newPrice: 133,
						oldPrice: 210,
						describe: '玖慕（JIUMU）毛线帽女士帽子冬季纯羊毛帽子女冬季防风保暖防寒帽'
					},
					{
						src: 'https://img10.360buyimg.com/n7/jfs/t1/144677/13/7379/89807/5f5076ecE57b3d21b/56ab3155e000383d.jpg',
						newPrice: 127,
						oldPrice: 209,
						describe: '美国苹果 /AEMAPE 休闲裤男系带时尚长裤潮流工装裤宽松运动裤子束'
					}
				]
			}
		},
		methods: {
			async getSwipers() {
				let result = await this.$myRequest({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
				})
				this.swipers = result.data.message;
			},
			toSupermarket() {
				uni.navigateTo({
					url: '../supermarket/supermarket'
				})
			},
			toContact() {
				uni.navigateTo({
					url: '../contact/contact'
				})
			},
			toPhotograph() {
				uni.navigateTo({
					url: '../photograph/photograph'
				})
			},
			toVideo() {
				uni.navigateTo({
					url: '../video/video'
				})
			}
		},
		onLoad() {
			this.getSwipers()
		}
	}
</script>

<style>
	swiper {
		width: 750rpx;
		height: 380rpx;
	}

	swiper image {
		height: 100%;
		width: 100%;
	}

	#nav {
		display: flex;
	}

	.nav_item {
		width: 25%;
		text-align: center;
	}

	.nav_item_iconfont {
		height: 120rpx;
		width: 120rpx;
		line-height: 120rpx;
		color: white;
		font-size: 50rpx;
		background: #f0145a;
		border-radius: 50%;
		margin: 20rpx auto;
	}

	.nav_item_title {
		font-size: 30rpx;
		color: black;
	}

	#recommend {
		background: #eee;
		overflow: hidden;
		margin-top: 30rpx;
	}
	
	#recommend_commodities {
		background: white;
		margin-top: 6rpx;
		margin-bottom: 10rpx;
		color: #f0145a;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 50rpx;
	
	}
</style>
