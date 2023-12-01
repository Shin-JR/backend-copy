const app = require('./app.js')
const db = require('./models/index.js')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3000

db.sequelize.authenticate().then(() => {
  console.log('Database connected')
  app.listen(PORT, (err) => {
    if (err) {
      return console.error('Error starting server:', err)
    }
    console.log('Listening on port 3000')
    return app
  })
})

  .catch((err) => console.error('Unable to connect to the database:', err))
