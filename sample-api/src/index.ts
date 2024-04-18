import { Hono } from 'hono';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api', (c) => {
	return c.json({ message: 'Hello Hono!' });
});

app.get('/api/hello/:name', (c:any) => {
	const name = c.params.name;
  console.log(c.params)
	return c.text(`Hello, ${name}!`);
});

export default app
