module.exports = (app) => {
  app.get('/', (req, res) => {
    console.log(`Request em ${req.url}`)
    res.render('index')
  })
}
