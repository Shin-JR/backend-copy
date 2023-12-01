const Router = require('koa-router')

const router = new Router()

router.get('usuarios.list', '/', async (ctx) => {
  try {
    const usuarios = await ctx.orm.usuario.findAll()
    ctx.body = usuarios
    ctx.status = 200
  } catch (error) {
    ctx.body = error
    ctx.status = 400
  }
})

router.get('usuarios.show', '/:id', async (ctx) => {
  try {
    const usuario = await ctx.orm.usuario.findByPk(ctx.params.id)
    if (!usuario) {
      ctx.status = 404
      ctx.body = { error: 'Usuario no encontrado' }
    } else {
      ctx.body = usuario
      ctx.status = 200
    }
  } catch (error) {
    ctx.body = error
    ctx.status = 400
  }
})

module.exports = router
