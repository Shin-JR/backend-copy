// import Router from "koa-router";
const Router = require('koa-router')
const authUtils = require('../lib/auth/jwt')

const router = new Router()

router.post('staff.create', '/', authUtils.isAdmin, async (ctx) => {
  try {
    const tecnico = await ctx.orm.tecnico.create(ctx.request.body)
    ctx.body = tecnico
    ctx.status = 201
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

router.get('staff.list', '/', async (ctx) => {
  try {
    const tecnicos = await ctx.orm.tecnico.findAll()
    ctx.body = tecnicos
    ctx.status = 200
  } catch (error) {
    ctx.body = error
    ctx.status = 400
  }
})

router.get('tecnicos.show', '/:id', async (ctx) => {
  try {
    const tecnico = await ctx.orm.tecnico.findByPk(ctx.params.id)
    if (!tecnico) {
      ctx.status = 404
      ctx.body = { error: 'técnico no encontrado' }
    } else {
      ctx.body = tecnico
      ctx.status = 200
    }
  } catch (error) {
    ctx.body = error
    ctx.status = 400
  }
})

router.put('staff.update', '/:id', authUtils.isAdmin, async (ctx) => {
  try {
    const { id } = ctx.params
    const datosActualizados = ctx.request.body

    // Busca el técnico por ID
    const tecnico = await ctx.orm.tecnico.findByPk(id)

    if (!tecnico) {
      ctx.body = { error: 'Técnico no encontrado' }
      ctx.status = 404
      return
    }

    await tecnico.update(datosActualizados)

    ctx.body = tecnico
    ctx.status = 200
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

router.delete('staff.delete', '/:id', authUtils.isAdmin, async (ctx) => {
  try {
    const { id } = ctx.params

    // Busca el técnico por ID
    const tecnico = await ctx.orm.tecnico.findByPk(id)

    if (!tecnico) {
      ctx.body = { error: 'Técnico no encontrado' }
      ctx.status = 404
      return
    }

    await tecnico.destroy()

    // ctx.body = tecnico
    ctx.status = 200
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

module.exports = router
