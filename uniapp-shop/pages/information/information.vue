<template>
	<view>
		<view class="info_content" v-for="data in datas">
			<image :src="data.thumbnail_pic_s"></image>
			<view @click="toDetail(data.url)">
				<view class="info_content_title">{{ data.title }}</view>
				<view class="info_content_source">发布时间：{{ data.date }}<br/> 来源：{{ data.author_name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas: [
					{
						uniquekey:"a89ca0caf4993c18691bfc88631fd286",
						title:"今秋这些颜色才真的火！",
						url:"https://mini.eastday.com/mobile/201024101101560.html",
						date:"2020-10-24 10:11",
						author_name:"欧美潮时尚",
						thumbnail_pic_s:"https://06imgmini.eastday.com/mobile/20201024/20201024101101_fce2fbf1e6347442a43ac93de19a3aa0_34_mwpm_03200403.jpg"
					},
					{
						uniquekey:"8e432ffa34e787124875ae6a7cc81087",
						title:"刘诗诗最新封面大片释出，工业风复古造型，尽显独特魅力",
						url:"https://mini.eastday.com/mobile/201024100757025.html",
						date:"2020-10-24 10:07",
						author_name:"yoyo聊时尚",
						thumbnail_pic_s:"https://07imgmini.eastday.com/mobile/20201024/20201024100757_a3701ebdb154051d85a3af47475ade30_2_mwpm_03200403.jpg"
					},
					{
						uniquekey:"474532c22ccef0abf19e76c36c9d9b5c",
						title:"热门洗面奶种草测评：这些洗面奶挺滋润，让皮肤越洗越光滑细腻",
						url:"https://mini.eastday.com/mobile/201024094730138.html",
						date:"2020-10-24 09:47",
						author_name:"娱乐的小腿",
						thumbnail_pic_s:"https://00imgmini.eastday.com/mobile/20201024/2020102409_dab0ad81176e488c87966e77bf63a1d2_8566_mwpm_03200403.jpg"
					},
					{
						uniquekey:"9084036159f835890d1e0af710b0bc1c",
						title:"哪些品牌的洗面奶好用？这些洁面乳特别适合秋冬皮肤缺水粗糙使用",
						url:"https://mini.eastday.com/mobile/201024094320900.html",
						date:"2020-10-24 09:43",
						author_name:"娱乐的小腿",
						"thumbnail_pic_s":"https://01imgmini.eastday.com/mobile/20201024/2020102409_39bb49d6712f4a98a7a8c6927ca5bb20_4065_mwpm_03200403.jpg"				
					},
			  ]
			}
		},
		methods: {
			toDetail(src) {
				uni.navigateTo({
				    url: `../information-detail/information-detail?src=${src}`
				});
			}
		}
	}
</script>

<style>
	.info_content {
		display: flex;
		border-bottom: 2rpx solid #EEEEEE;
		width: 100%;
		height: 200rpx;
		margin-top: 10rpx;
	}
	.info_content>image {
		width: 200rpx;
		height: 100%;
	}
	.info_content>view {
		width: 530rpx;
		margin: 0 auto;
		height: 100%;
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.info_content_title {
		font-size: 34rpx;
	}
	.info_content_source {
		color: gray;
	}
</style>
