module.exports = function(){
    this.getNoticias = function(connection,callback){
     connection.query('SELECT n.id_noticia,n.titulo FROM noticia as n',callback); 
    }
    this.getNoticia = function(connection,callback){
        connection.query('SELECT n.* FROM noticia as n where n.id_noticia = 2',callback); 
    }
    this.salvarNoticia = function(noticia,connection,callback){
        connection.query('INSERT INTO noticia set ? ',noticia,callback); 
    }
    return this;
}