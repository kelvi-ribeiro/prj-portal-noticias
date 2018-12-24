module.exports = function (app){    
    app.get('/noticia',function(req,res){
    var connection = app.config.dbConnection();
    var noticiaDAO = new app.app.models.NoticiaDAO(connection);
    noticiaDAO.getNoticia(function(error,result){        
        res.render("noticias/noticia",{noticia:result});
      })       
   });
}