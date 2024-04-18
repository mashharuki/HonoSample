import { describe, expect, it } from 'bun:test'
import app from './../src/index'

describe('My first test', () => {
  it('Should return 200 Response', async () => {
    const req = new Request('http://localhost:3000/')
    const res = await app.fetch(req)
    expect(res.status).toBe(200)
  })
})