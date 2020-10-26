<template>
		<view class="content">
			<!-- 没有购物的时候 -->
			<view class="container" v-if="hasnonum">
				<view class="shopcart">
					<view class="cart_icon iconfont icon-gouwuche"></view>
					<view class="cart_title">购物车竟然是空的</view>
					<button class="btn" type="warn" size="mini" @click="toSupermarket">去逛逛</button>
				</view>
				<view class="yourlike_warp">
					<view class="youlike">
						<text class="like_line"></text>
						<text class="like_title">猜你可能喜欢</text>
						<text class="like_line"></text>
					</view>
					<view class="like_list">
						<view class="like_item">
							<view class="like_top">
								<image src="../../static/images/vivo01.jpg" mode="aspectFit"></image>
							</view>
							<view class="like_list_title">意大利PASQUA酒庄 桃红起泡葡萄酒 FRIZZANTI微起泡酒ROSE FRIZZANTE 750ml</view>
							<view class="like_pic">
								<view class="like_price">￥250</view>
								<view class="like_price_vip">￥212.5 <text class="like_icon_vip iconfont icon-vip1"></text></view>
							</view>
						</view>
						<view class="like_item">
							<view class="like_top">
								<image src="../../static/images/vivo01.jpg" mode="aspectFit"></image>
							</view>
							<view class="like_list_title">意大利PASQUA酒庄 桃红起泡葡萄酒 FRIZZANTI微起泡酒ROSE FRIZZANTE 750ml</view>
							<view class="like_pic">
								<view class="like_price">￥250</view>
								<view class="like_price_vip">￥212.5 <text class="like_icon_vip iconfont icon-vip1"></text></view>
							</view>
						</view>
					</view>
			</view>
			
			</view>
			<!-- 购物车列表 -->
			<view class="container" v-else>
				<view class="cart_item" v-for="item in cartlist" :key="item.id">
					<!-- 复选框 -->
					<view class="cart_chk_wrap">
						<checkbox-group :data-id="item.id"  @change="changeitem">
							<label>
								<checkbox :checked="item.checked"/><text></text>
							</label>
						</checkbox-group>
					</view>
					<!-- 	商品图片 -->
					<view class="cart_img_wrap">
						<image :src="item.imgurl" mode="aspectFit"></image>
					</view>
					<!-- 商品信息 -->
					<view class="cart_info_wrap">
						<view class="goods_name">{{item.desc}}</view>
						<view class="goos_price_wrap">
							<view class="goods_price">￥{{item.price}}</view>
							<view class="cart_num_tool">
								<view class="num_edit" @tap="handlenumeidt" :data-id="item.id" :data-operation="-1">-</view>
								<view class="goos_num">{{item.num}}</view>
								<view class="num_edit" @tap="handlenumeidt" :data-id="item.id" :data-operation="1">+</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 页面计算部分 -->
			<view class="bottm">
				<view class="pay">
					<view class="select">
						<checkbox-group name="" @change="changall">
							<label class="select_kuang">
								<checkbox :checked="allchecked"/><text>全选</text>
							</label>
						</checkbox-group>
					</view>
					<text class="count">合计:<text class="count_num">￥{{totalprice}}</text></text>
					<view class="btn_pay">去结算({{totalnum}})</view>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				hasnonum:null,
				cartlist:[],
				//全选状态
				allchecked:false,
				totalprice:0,
				totalnum:0
			}
		},
		methods: {
			//商品选中事件
			// 绑定change事件,获取被修改商品对象,把其状态取反,在重新填充到data中的数据和本地数据中,在重新计算全选,总价格总数量
			changeitem(e){
				const id = e.currentTarget.dataset.id;
				let cart = this.cartlist;
				let index = cart.findIndex(v=>v.id==id);
				
				cart[index].checked=!cart[index].checked
				this.cart=cart;
				// uni.setStorageSync('cart',cart);
				
				//重新计算下面部分的数据
				this.setcart_count(cart)
			},
			//设置下面部分总价格和总数量
			setcart_count(cart){
				var allchecked = cart.every(v=>v.checked)
				this.cartlist=cart
				this.allchecked = allchecked
				this.hasnonum = false
				let totalnum=0;
				let totalprice=0;
				cart.forEach(item=>{
					if(item.checked){
						totalprice+=item.num*item.price;
						totalnum+=item.num
					}
				})
				this.totalnum=totalnum
				this.totalprice=totalprice
				
				uni.setStorageSync('cart',cart);
			},
			//全选按钮改变事件
			changall(){
				// const {allchecked,cart} = data;
				let allchecked = this.allchecked;
				let cart = this.cartlist;
				allchecked = !allchecked;
				cart.forEach(item=>item.checked=allchecked)
				this.setcart_count(cart)
			},
			// 商品数量编辑事件
			handlenumeidt(e){
				console.log(e)
				let {id,operation} = e.currentTarget.dataset;
				let cart = this.cartlist;
				const index1 = cart.findIndex(v=>v.id==id);
				//要进行判断当前商品的数量为0和当前点击的是减1操作，就弹出框是否删除该商品
				if(cart[index1].num==1&operation=='-1'){
					uni.showModal({
					    title: '提示',
					    content: '你确定要删除该商品吗',
					    success: (res)=> {
					        if (res.confirm) {
					            cart.splice(index1,1)
								this.setcart_count(cart)
								if(this.cartlist.length==0){
									this.hasnonum=true;
									this.allchecked=false;
								}
								// if(cart)
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
				cart[index1].num+=Number(operation);
				this.setcart_count(cart)
			},
		  toSupermarket() {
				uni.navigateTo({
					url:'../supermarket/supermarket'
				})
			}
		},
		onShow() {
			var cart = uni.getStorageSync('cart') || [];
			//有数据，就是显示购物车列表
			if(cart.length!=0){
				//循环遍历取出来的对象 只要有一个对象checked属性为false酒
				// var allchecked = cart.every(v=>v.checked)
				// this.cartlist=cart
				// this.allchecked = allchecked
				// this.hasnonum = false
				// let totalnum=0;
				// let totalprice=0;
				// cart.forEach(item=>{
				// 	if(item.checked){
				// 		totalprice+=item.num*item.price;
				// 		totalnum+=item.num
				// 	}
				// })
				// this.totalnum=totalnum
				// this.totalprice=totalprice
				this.setcart_count(cart)
				
			}else{
				//显示购物车为空的页面
				this.hasnonum=true;
				this.allchecked=false;
			}
		}
	}
</script>

<style scoped>
page{
	background-color: #F3F3F3;
	height: 100%;
}
.content{
	height: 100%;
}
.container{
	height: 100%;
}
.shopcart{
	width: 600rpx;
	height: 320rpx;
	margin: 0 auto;
	display: flex;
	align-items: center;
}
.cart_title{
	font-size: 40rpx;
	margin-bottom: 20rpx;
}
.cart_icon{
	font-size: 120rpx;
	color: #F0D3B8;
}
.btn{
	width: 200rpx;
	color: #FFFFFF;
}
.yourlike_warp{
	width: 680rpx;
	margin-top: 20rpx;
	margin: 20rpx auto 0;
}
.youlike{
	text-align: center;
	height: 60rpx;
	align-items: center;
	display: flex;
	flex-direction: row;
}
.youlike .like_line{
	display: inline-block;
	width: 240rpx;
	border-top: 2rpx solid #CCCCCC;
}
.youlike .like_title{
	color: red;
	vertical-align: middle;
	margin: 0 20rpx;
	font-size: 24rpx;
}
.like_list{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.like_item{
	width: 300rpx;
	height: 394rpx;
	background-color: #FFFFFF;
	margin-bottom: 14rpx;
}
.like_item:nth-child(2n) {
	margin-left: 42rpx;
}
.like_top{
	width: 300rpx;
	height: 288rpx;
}
.like_top image{
	width: 100%;
}
.like_list_title{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap; 
	font-size: 30rpx;
	margin-top: 10rpx;
}
.like_pic{
	display: flex;
	flex-direction: row;
	align-items: center;
}
.like_price{
	font-size: 28rpx;
	color: red;
}
.like_price_vip{
	display: flex;
	flex-direction: row;
	margin-left: 16rpx;
	color: #CCCCCC;
	font-size: 26rpx;
	align-items: center;
}
.like_icon_vip{
	font-size: 50rpx;
	margin-left: 10rpx;
}
/* 购物车部分 */
.cart_item{
	display: flex;
	flex-direction: row;
	height: 88px;
	padding-bottom: 2px;
	border-bottom: 1px solid #CCCCCC;
}
.cart_chk_wrap{
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.cart_img_wrap{
	flex: 2;
}
.cart_img_wrap image{
	width: 100%;
}
.cart_info_wrap{
	flex: 4;
}
.goods_name{
	display: -webkit-box;
	overflow: hidden;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
}
.goos_price_wrap{
	display: flex;
	margin-top: 20px;
	flex-direction: row;
	justify-content: space-between;
}
.goods_price{
	color: red;
	font-size: 17px;
}
.cart_num_tool{
	display: flex;
	flex-direction: row;
}
.num_edit{
	width: 24px;
	height: 24px;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #CCCCCC;
	
}
.goos_num{
	width: 23px;
	height: 23px;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* 结算页面部分 */
.bottm{
	position: fixed;
	left: 0;
	/* bottom: 0; */
	bottom: var(--window-bottom,0);
	/* top: 1184rpx; */
	width: 100%;
}
.pay{
	display: flex;
	flex-direction: row;
	height: 80rpx;
	align-items: center;
	padding-left: 10rpx;
	background-color: #FFFFFF;
}
.select{
	height: 80rpx;
	font-size: 26rpx;
	align-items: center;
	padding-top: 20rpx;
}
.count{
	width: 200rpx;
	height: 80rpx;
	margin-left: 30rpx;
	font-size: 28rpx;
	padding: 16rpx;
	padding-top: 50rpx;
}
.count_num{
	color: red;
	margin-left: 18rpx;
}
.btn_pay{
	height: 55rpx;
	margin-left: 200rpx;
	background-color: red;
	color: white;
	padding: 16rpx;
	text-align: center;
}
</style>
