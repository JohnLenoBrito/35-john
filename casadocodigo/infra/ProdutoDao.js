const ProdutoDao = function (connection) {
  this.connection = connection
}

ProdutoDao.prototype.lista = function (callback) {
  this.connection.query('SELECT * FROM livros', callback)
}

ProdutoDao.prototype.listaPromocao = function (callback){
  this.connection.query('SELECT id, titulo FROM livros', callback)
}

ProdutoDao.prototype.salva = function (livro, callback){
  this.connection.query('INSERT INTO livros SET ?', livro, callback)
}

module.exports = function(){
  return ProdutoDao;
}


//===================ES6
//class ProdutoDao {
  //constructor(connection = null){
    //this.connection = connection
  //}

  //lista(callback){
    //this.connection.query('SELECT * FROM livros', callback)
  //}
//}

//export = ProdutoDao
//export.default = ProdutoDao
