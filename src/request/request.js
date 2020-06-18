import axios from 'axios'
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
// 去除nprogress进度条右侧的小圆圈
Nprogress.configure({ showSpinner: false })
export function request(config) {
    //创建axios实例
    const instance = axios.create({
        // 一定要加http://
        baseURL: 'http://localhost:2000',
        
    })
    // 请求拦截
    instance.interceptors.request.use(res => {
        // 请求中显示nprogress进度条
        Nprogress.start();
        return res;
    })
    //响应拦截
    instance.interceptors.response.use(result => {
        Nprogress.done();
        // 拿到响应的数据，并对数据做一层处理
        return result.data
    }, err => {
        console.log(err)
    })
    //return的axios实例instance就是一个promise对象，可以使用.then.catch.all方法
    return instance(config)
}