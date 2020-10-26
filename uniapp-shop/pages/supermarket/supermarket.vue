<template>
	<view>
		<goodsList :goods="goods"></goodsList>
		<view id="foot">— — — — — — — 到底了~ — — — — — —  </view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		components: {
			goodsList
		},
		data() {
			return {
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
	
				],
				addCount: 2
			}
		},
		methods: {
			
		},
		// 朝下面滑动，加载更多
		onReachBottom() {// 滑动到底部时
			if(this.addCount > 0){
				this.addCount--;
				this.goods = [...this.goods,...this.goods];
			}else{
				return
			}
		},
		// 下拉刷新
		onPullDownRefresh() { 
			setTimeout(()=>{
				this.goods = [
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
				];
				this.addCount = 2;
				uni.stopPullDownRefresh();
			},2000)
		},
	}
</script>

<style>
	#foot {
		background: #eee;
		color: gray;
		text-align: center;
	}

</style>
