import { message } from '@/index'
import { test, expect } from 'vitest'

test('message', () => {
  expect(message).toBe('Hello World!')
})
