<template>
	<view>
		<view id="phone">
			<input v-model="phone" placeholder="请输入手机号" class="phone_input"/>
		</view>
		<view>
			<input v-model="password" placeholder="请输入密码" class="phone_input"/>
		</view>
		<view id="login_btn">
			<button @click="login" >登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				password:''
			}
		},
		methods: {
			login() {
				if(this.phone == '17765522007' && this.password == '123456'){
					uni.switchTab({
						url:'../index/index'
					})
				}
				return
			}
		}
	}
</script>

<style>
	page {
		overflow: hidden;
	}
	#phone {
		margin-top: 400rpx;
	}
	.phone_input {
		height: 100rpx;
		width: 80%;
		margin: 0 auto;
		border-bottom: 2rpx solid #CCCCCC;
	}
	#login_btn {
		width: 80%;
		margin: 100rpx auto;
	}
	#login_btn>button {
		background-color: #f0145a;
		color: white;
	}
</style>
