const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const dotenv = require('dotenv')

module.exports = () => {
  const app = express()

  dotenv.config()

  app.use(express.static('./public'))
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(expressValidator())

  app.use((req, res, next) => {
    console.log(`request em ${req.url}`)
    next()
  })

  app.set('view engine', 'ejs')

  load('routes').then('infra').into(app)

  return app
}
