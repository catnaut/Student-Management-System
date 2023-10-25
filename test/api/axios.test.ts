import { $http } from '../../src/api/axios'
import { test, expect, describe } from 'vitest'

describe('axios', () => {
  test('network test', async () => {
    $http({
      url: '/',
      method: 'get'
    }).then((result) => {
      expect(result).toBeDefined()
    })
  })
})
