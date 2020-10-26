const BASE_URL = "";
export const myRequest = (options) => {
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success:(res)=> {
				resolve(res)
			},
			fail:(err)=> {
				reject(err)
			}
		})
	})
}