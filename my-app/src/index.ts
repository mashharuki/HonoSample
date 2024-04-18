import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/test', (c) => {
  return c.text('Test!!')
})

app.post('/test2', (c) => {
  return c.text('Test!!')
})

export default app
