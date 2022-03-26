module.exports = (app) => {
  app.post('/produtos', (req, res) => {
    let livro = req.body

    req.assert('titulo', 'Titulo deve ser preenchido').notEmpty()
    req.assert('preco', 'Preço deve ser um número').isFloat()
    let errors = req.validationErrors()

    if(errors){
      console.log('há erros de validação!')
      res.format({
        html: () => {
          res.status(400).render('produtos/form', { validationErrors: errors })
        },
        json: () => {
          res.status(400).send(errors)
        }
      })
    }

    const connection = app.infra.connectionFactory()
    const produtoDao = new app.infra.ProdutoDao(connection)

    produtoDao.salva(livro, (err, result, fields) => {
      if(!err)
        res.redirect('produtos')
    })
    connection.end()
  })

  app.get('/produtos', (req, res) => {

    const connection = app.infra.connectionFactory()
    const produtoDao = new app.infra.ProdutoDao(connection)

    produtoDao.lista((err, result, fields) => {
      const lista = result
      const qtd = lista.legnth

      res.format({
        html: () => {
          res.render('produtos/lista', { lista, qtd })
        },
        json: () => {
          res.json(lista)
        }
      })
    })
    connection.end()
  })

  app.get('/produtos/form', (req, res) => {
    res.render('produtos/form')
  })
}
