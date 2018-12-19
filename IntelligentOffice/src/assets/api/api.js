import axios from 'axios'
import app from '@/main'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let Ax = axios.create({
  baseURL: 'xxxxx'
})

// 请求拦截
Ax.interceptors.request.use(
  config => {
    return config
  },
  err = Promise.reject(err)
)

// 响应拦截
Ax.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error)
  }
)

export default Ax