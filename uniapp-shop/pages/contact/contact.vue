<template>
	<view id="contact">
		<image src="../../static/images/aboutUs.png" id="about_us"></image>
		<view id="call">
			有问题联系：<text @click="call">13208178376 (点击拨打)</text>
		</view>
		<view id="address">
			公司地址：四川省成都市武侯区天府三街198号
		</view>
		<map 
		longitude="104.063095" 
		latitude="30.547546"
		scale="17" 
		:markers="mark">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mark:[
					{
						id: 1,
						longitude: 104.063095,
					  latitude: 30.547546,
					  iconPath: '../../static/teacher_cai.jpg',
						width: 60,
						height: 60
					}
				]
			}
		},
		methods: {
			call() {
				uni.makePhoneCall({
				    phoneNumber: '13208178376' 
				});
			}
		}
	}
</script>

<style>
	#about_us {
		width: 750rpx;
	}
	#contact > view{
	  font-size: 43rpx;
  }
	#call {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		margin-left: 14rpx;
	}
	#address {
		margin-bottom: 30rpx;
		padding-left: 14rpx;
	}
	map {
		width: 750rpx;
		height: 750rpx;
	}
</style>
