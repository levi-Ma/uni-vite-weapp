import http from '@/service'

class ApiHttp {
  /**
   * demo
   */
  getTodo(id: string | number) {
    return http.get(`todos/${id}`)
  }
}

export default new ApiHttp()
