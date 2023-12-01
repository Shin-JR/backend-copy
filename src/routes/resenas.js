// import Router from "koa-router";
const Router = require('koa-router')

const router = new Router()

router.post('reviews.create', '/', async (ctx) => {
  try {
    const resenas = await ctx.orm.resena.create(ctx.request.body)
    ctx.body = resenas
    ctx.status = 201
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

router.get('reviews.list', '/', async (ctx) => {
  try {
    const resenas = await ctx.orm.resena.findAll()
    ctx.body = resenas
    ctx.status = 200
  } catch (error) {
    ctx.body = error
    ctx.status = 400
  }
})

router.put('reviews.update', '/:id', async (ctx) => {
  try {
    const { id } = ctx.params
    const datosActualizados = ctx.request.body

    const resena = await ctx.orm.tecnico.findByPk(id)

    if (!resena) {
      ctx.body = { error: 'Técnico no encontrado' }
      ctx.status = 404
      return
    }

    await resena.update(datosActualizados)

    ctx.body = resena
    ctx.status = 200
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

router.delete('reviews.delete', '/:id', async (ctx) => {
  try {
    const { id } = ctx.params

    // Busca el técnico por ID
    const resena = await ctx.orm.resena.findByPk(id)

    if (!resena) {
      ctx.body = { error: 'Técnico no encontrado' }
      ctx.status = 404
      return
    }

    await resena.destroy()

    ctx.body = resena
    ctx.status = 200
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

module.exports = router
