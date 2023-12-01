// extraído de ejemplo de cápsulas
// https://github.com/IIC2513/guess-who-backend/blob/main
const Router = require('koa-router')
const staff = require('./routes/tecnicos.js')

const authRoutes = require('./routes/authentication.js')
const jwtMiddleware = require('koa-jwt')
const usuarios = require('./routes/usuarios.js')
const modulos = require('./routes/modulos.js')
const scopeProtectedRoutes = require('./routes/scopeExample.js')
const dotenv = require('dotenv')

dotenv.config()

const reviews = require('./routes/resenas.js')

const router = new Router()

router.use('/staff', staff.routes())
router.use('/reviews', reviews.routes())

router.use(authRoutes.routes())

// Desde esta línea, todas las rutas requieriran un JWT. Esto no aplica para
// las líneas anteriores
router.use(jwtMiddleware({ secret: process.env.JWT_SECRET }))

router.use('/users', usuarios.routes())
router.use('/modules', modulos.routes())

router.use('/scope-example', scopeProtectedRoutes.routes())

module.exports = router
