import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login as login_api } from '@/api/login'
import { url } from 'inspector'
import exp from 'constants'
import { count } from 'console'

export const useUserStore = defineStore('userStatus', () => {
  const userName = ref('')
  const tokenString = ref('') // timestamp
  const tokenExpire = ref(0)
  const isLogin = ref(false)

  // Api 源有 bug ，获取的 tokenExpire 格式不对，暂时不做判断
  // const token = computed(() => {
  //   const now = Date.now()
  //   const expire = tokenExpire.value
  //   if (expire > now) {
  //     return tokenString.value
  //   }
  //   else {
  //     throw new Error('token expired')
  //   }
  // })

  const token = computed(() => {
    return tokenString.value
  })

  const login = async (username: string, password: string) => {
    try {
      const resp = await login_api(username, password)
      const { data } = resp
      tokenString.value = data.token
      tokenExpire.value = data.tokenExpire
      isLogin.value = true
      // get user info
      userName.value = username
    } catch (error) {
      // if (error.response.status === 401) {
      // return Promise.reject('username or password incorrect')
      // throw new Error('username or password incorrect')
      // }
      throw new Error('username or password incorrect')
    }
  }
  return { userName, token, isLogin, login }
})
