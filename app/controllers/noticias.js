module.exports.noticias = function(app,req,res){
    var connection = app.config.dbConnection();
    var noticiaDAO = new app.app.models.NoticiaDAO(connection);
    noticiaDAO.getNoticias(function(error,result){        
        res.render("noticias/noticias",{noticias:result});
      });           
}

module.exports.noticia = function(app,req,res){
    var connection = app.config.dbConnection();
    var noticiaDAO = new app.app.models.NoticiaDAO(connection);
    noticiaDAO.getNoticia(function(error,result){        
        res.render("noticias/noticia",{noticia:result});
      });    
}