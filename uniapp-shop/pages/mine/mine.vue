<template>
	<view>
		<view id="login_out">
			<button @click="toLogin" >退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLogin() {
				uni.redirectTo({
					url:'../login/login'
				})
			}

		}
	}
</script>

<style>
#login_out>button{
	position: fixed;
	bottom: 200rpx;
	left: 50%;
	margin-left: -40%;
	width: 80%;
	color: white;
	background: #f0145a;
}
</style>
