module.exports = function (app){    
    app.get('/noticias',function(req,res){
    var connection = app.config.dbConnection();
    connection.query('SELECT n.id_noticia,n.titulo FROM noticia as n',function(error,result){        
        res.render("noticias/noticias",{noticias:result});
       });        
   });
}