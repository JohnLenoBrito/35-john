var http = require('http')
var ip = 'localhost' //127.0.0.1 || 0.0.0.0
var port = 3000

http.createServer(function(req, res){
  var resposta = []

  console.log(`Request feito em ${req.url}`)

  res.writeHead(200, {'Content-type': 'text/html'})

  resposta["/prdutos"] = "<h1>Listagem de Produtos</h1>"
  resposta["/"] = "<h1>Home</h1>"

  res.end(resposta[req.url] || '<h1>Pagina não encontrada</1>')
  
}).listen(port, ip, function () {
  console.log(`Servidor de pé em http:// ${ip}:${port}`)
  console.log('Para desligar o servidor: crtl + c')
})
