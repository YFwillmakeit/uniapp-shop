<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

/* 全局css样式 */
@font-face {font-family: "iconfont";
  src: url('~@/static/font/iconfont.eot?t=1603329554686'); /* IE9 */
  src: url('~@/static/font/iconfont.eot?t=1603329554686#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('~@/static/font/iconfont.woff?t=1603329554686') format('woff'),
  url('~@/static/font/iconfont.ttf?t=1603329554686') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('~@/static/font/iconfont.svg?t=1603329554686#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-lianxi:before {
  content: "\e649";
}

.icon-shipin:before {
  content: "\e656";
}

.icon-gouwu:before {
  content: "\e86e";
}

.icon-tupian:before {
  content: "\e8ba";
}


</style>
