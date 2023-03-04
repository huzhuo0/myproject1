import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'

export default function setAxios () {
  // 请求拦截
  axios.interceptors.request.use(
    config => {
      // if(store.state.token){ /* 在状态管理中判断是否有token 有的话我们就加到请求头里去 */
      //     config.headers['Authorization']= `Bearer ${store.state.token}`
      // }
      return config /* 没有token的话，我们直接return 配置 */
    }
  )
}
