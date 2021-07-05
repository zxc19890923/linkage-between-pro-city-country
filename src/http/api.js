// 在main.js中将api到处为全局变量，直接全局使用。
import { get } from '@/http/http.js'
export default {
  // 封装接口
  getPlatform (params) {
    get('service-core/manage/data/getPlatforms', params)
  }
}