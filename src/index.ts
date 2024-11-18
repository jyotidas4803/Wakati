import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  const text = c.req.query("text")
  if(!text) {
    c.status(400)
    return c.json({ message: 'Missing text' })
  }
  const length = 

  // console.log(c.req.query("text"))
  // // return c.text('Hello World')
  // return c.json({ message: 'Hello World' })
}) 

export default app
