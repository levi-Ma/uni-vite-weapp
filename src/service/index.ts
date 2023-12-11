import { HughConfig, HughHttp } from '@hugh-ma/utils'

const uniHttp = new HughHttp()

// 添加请求拦截器
uniHttp.interceptors.request.use((config) => {
  const { method, params } = config
  const headers: any = {}

  // 添加token
  if (HughConfig.getAccessToken())
    headers[HughConfig.authorizationHeaderKey] = HughConfig.getAccessToken()

  // 不缓存get请求
  if (method === 'get')
    headers['Cache-Control'] = 'no-cache'

  // delete请求参数放入body中
  if (method === 'delete') {
    headers['Content-type'] = 'application/json;'
    Object.assign(config, {
      data: params,
      params: {},
    })
  }

  return {
    ...config,
    headers,
  }
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
uniHttp.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default uniHttp
