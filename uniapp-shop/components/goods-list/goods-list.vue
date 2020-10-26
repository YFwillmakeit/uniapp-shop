<template>
	<view id="recommend_list">
		<view class="recommend_list_item" v-for="good in goods" @click="toGoodsDetail(good)">
			<image :src=good.src></image>
			<view class="recommend_list_item_price">
				<text class="recommend_list_item_newPrice">{{ good.newPrice }}</text>
				<text class="recommend_list_item_oldPrice">{{ good.oldPrice }}</text>
			</view>
			<view>{{ good.describe }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			goods: Array
		},
		methods: {
			toGoodsDetail(good) {
				uni.navigateTo({
					url: `../../pages/goods-detail/goods-detail?describe=${good.describe}&newPrice=${good.newPrice}&oldPrice=${good.oldPrice}`
				})
			}
		}
	}
</script>

<style>
	#recommend_list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background: #eee;
	}
	
	.recommend_list_item {
		background: white;
		width: 43%;
		margin: 10rpx;
		padding: 10rpx 16rpx 20rpx 16rpx;
	}
	
	.recommend_list_item>image {
		display: block;
		width: 300rpx;
		height: 350rpx;
		margin: 20rpx auto;
		
	}
	
	.recommend_list_item_price {
		margin-bottom: 6rpx;
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

</style>
