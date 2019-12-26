
/**  
*@接口文档
*@https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi
*/
import axios from 'axios'
//请求路径
axios.defaults.baseURL ="http://118.31.23.45:80"
//请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default {
//接口地址 : /banner
//调用例子 : /banner, /banner?type=2
    // getBanner(){
    //   return  axios.get(`/banner?type=1`).then((res)=>{
    //         if(status=="200"&&statusText=="OK"){
    //             return res.data
    //         }
    //     })
    // }
    getBanner() {
        const url = `/banner?type=1`;
        return axios.get(url).then(response => response.data);
    }
}