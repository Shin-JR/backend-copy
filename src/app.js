const koa = require('koa')
const koaLogger = require('koa-logger')
const { koaBody } = require('koa-body')
const router = require('./routes.js')
const cors = require('@koa/cors')
const orm = require('./models/index.js')

// eslint-disable-next-line new-cap
const app = new koa()

app.context.orm = orm

// middleware proporcionado por koa
app.use(cors())
app.use(koaLogger())
app.use(koaBody())

// koa-router, siempre va antes
app.use(router.routes())

// Middleware personalizado. Printea hello world
app.use((ctx, next) => {
  ctx.body = 'Hello World'
})

module.exports = app
