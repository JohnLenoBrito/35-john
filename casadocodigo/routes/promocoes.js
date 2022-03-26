module.exports = (app) => {
  app.get('/promocoes/form', (rep, res) => {

    const connection = app.infra.connectionFactory()
    const produtoDao = new app.infra.ProdutoDao(connection)

    produtoDao.listaPromocao((err, result, fields) => {
      const livros = result

      res.format({
        html: () => {
          res.render('promocoes/form', { livros })
        },
        json: () => {
          res.json(lista)
        }
      })
    })
    connection.end()
  })

  app.post('/promocoes', (req, res) => {
    let promocao = req.body
    
    app.get('io').emit('novaPromocao', promocao)
    res.render('promocoes/fim', {promocao})
  })
}
