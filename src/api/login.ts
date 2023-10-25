import { $http, type ResponseData } from '@/api/axios'

export const login = async (userName: string, password: string): Promise<ResponseData> => {
  const result = $http({
    url: '/user/login',
    method: 'POST',
    data: {
      userName,
      password
    }
  })
  return result
}
