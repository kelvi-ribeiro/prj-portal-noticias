 function NoticiaDAO(connection){
    this._connection = connection;
 }
 NoticiaDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT n.id_noticia,n.titulo FROM noticia as n',callback); 
 }

 NoticiaDAO.prototype.getNoticia = function(callback){
    this._connection.query('SELECT n.* FROM noticia as n where n.id_noticia = 1',callback);  
 }

 NoticiaDAO.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query('INSERT INTO noticia set ? ',noticia,callback); 
 }
 module.exports = function(){
     return NoticiaDAO;
 }