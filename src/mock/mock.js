import mock from './index'
import list from './data/list'
import userInfo from './data/login'

const data = {
  data: list
}

const bootstrap = () => {
  mock.onPost('/api/list').reply((config) => {
    return new Promise((resolve, reject) => {
      resolve([200, data])
    })
  })
}

const userData = {
  code: 0,
  message: 'ok',
  data: userInfo
}

const login = () => {
  mock.onPost('/api/login').reply((config) => {
    return new Promise((resolve, reject) => {
      resolve([200, { data: userData }])
    })
  })
}
export default {
  bootstrap,
  login
}
