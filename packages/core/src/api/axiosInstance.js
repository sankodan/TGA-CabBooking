import axios from 'axios'

axios.interceptors.request.use((config) => {
  config.baseURL = 'http://localhost:5000'
  return config
})

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) {
    console.log('An unexpected error occured')
  }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}
