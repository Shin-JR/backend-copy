// import Router from "koa-router";
const Router = require('koa-router')
const authUtils = require('../lib/auth/jwt')

const router = new Router()

router.get('modules.list', '/', async (ctx) => {
  try {
    const modulos = await ctx.orm.modulo.findAll()
    ctx.body = modulos
    ctx.status = 200
  } catch (error) {
    ctx.body = error
    ctx.status = 400
  }
})

router.post('module.create', '/', authUtils.isAdmin, async (ctx) => {
  try {
    const module = await ctx.orm.modulo.create(ctx.request.body)
    ctx.body = module
    ctx.status = 201
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

router.put('module.update', '/:id', authUtils.isUser, async (ctx) => {
  try {
    const { id } = ctx.params
    const datosActualizados = ctx.request.body

    // Busca el técnico por ID
    const modulo = await ctx.orm.modulo.findByPk(id)

    if (!modulo) {
      ctx.body = { error: 'Módulo no encontrado' }
      ctx.status = 404
      return
    }

    await modulo.update(datosActualizados)

    ctx.body = modulo
    ctx.status = 200
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

router.delete('modulo.delete', '/:id', authUtils.isAdmin, async (ctx) => {
  try {
    const { id } = ctx.params

    // Busca el técnico por ID
    const modulo = await ctx.orm.modulo.findByPk(id)

    if (!modulo) {
      ctx.body = { error: 'Módulo no encontrado' }
      ctx.status = 404
      return
    }

    await modulo.destroy()

    ctx.body = modulo
    ctx.status = 200
  } catch (error) {
    ctx.body = { error: 'Error al procesar la solicitud' }
    ctx.status = 400
  }
})

module.exports = router
