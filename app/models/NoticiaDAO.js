 function NoticiaDAO(connection){
    this._connection = connection;
 }
 NoticiaDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT n.* FROM noticia AS n ORDER BY n.data_criacao DESC',callback); 
 }

 NoticiaDAO.prototype.getNoticia = function(callback){
    this._connection.query('SELECT n.* FROM noticia AS n where n.id_noticia = 1',callback);  
 }

 NoticiaDAO.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query('INSERT INTO noticia set ? ',noticia,callback); 
 }
 NoticiaDAO.prototype.getCincoUltimasNoticias = function(callback){
   this._connection.query('SELECT * FROM noticia ORDER BY data_criacao DESC LIMIT 5',callback); 
}
 
 module.exports = function(){
     return NoticiaDAO;
 }