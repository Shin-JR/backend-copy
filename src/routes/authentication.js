const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')

dotenv.config()

const router = new Router()

router.post('authentication.signup', '/signup', async (ctx) => {
  const authInfo = ctx.request.body
  let user = await ctx.orm.usuario.findOne({ where: { correo: authInfo.correo } })
  if (user) {
    ctx.body = `El usuario con el correo '${authInfo.correo}' ya existe!`
    ctx.status = 400
    return
  }

  try {
    const SALT_ROUNDS = 10
    const hashedPassword = await bcrypt.hash(authInfo.contraseña, SALT_ROUNDS)
    user = await ctx.orm.usuario.create({
      nombre: authInfo.nombre,
      correo: authInfo.correo,
      contraseña: hashedPassword,
      fecha_nacimiento: authInfo.fecha_nacimiento,
      contact: authInfo.contact,
      admin: authInfo.admin
    })
  } catch (error) {
    ctx.body = error
    ctx.status = 400
    return
  }
  ctx.body = {
    nombre: user.nombre,
    correo: user.correo
  }
  ctx.status = 201
})

router.post('authentication.login', '/login', async (ctx) => {
  let user
  const authInfo = ctx.request.body
  try {
    user = await ctx.orm.usuario.findOne({ where: { correo: authInfo.correo } })
  } catch (error) {
    ctx.body = error
    ctx.status = 400
    return
  }
  if (!user) {
    ctx.body = `El usuario con el correo'${authInfo.correo}' no ha sido encontrado :(`
    ctx.status = 400
    return
  }

  const validPass = await bcrypt.compare(authInfo.contraseña, user.contraseña)
  if (validPass) {
    ctx.body = {
      nombre: user.nombre,
      correo: user.correo
    }
    ctx.status = 200
  } else {
    ctx.body = 'Incorrect password'
    ctx.status = 400
    return
  }
  // Creamos el JWT. Si quisieras agregar distintos scopes, como por ejemplo
  // 'admin', podrían hacer un llamado a la base de datos y cambiar el payload
  // en base a eso.
  const expirationSeconds = 1 * 60 * 60 * 24
  const JWT_PRIVATE_KEY = process.env.JWT_SECRET
  const role = user.admin ? ['admin', 'user'] : ['user'] // REVISAR ESTA LÍNEA --> parece que sí funciona
  const token = jwt.sign(
    { scope: role }, // default user por ahora
    JWT_PRIVATE_KEY,
    { subject: user.id.toString() },
    { expiresIn: expirationSeconds }
  )
  ctx.body = {
    access_token: token,
    token_type: 'Bearer',
    expires_in: expirationSeconds
  }
  ctx.status = 200
})

module.exports = router
