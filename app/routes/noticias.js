module.exports = function (app){    
    app.get('/noticias',function(req,res){
    var connection = app.config.dbConnection();
    var noticiaDAO = new app.app.models.NoticiaDAO(connection);
    noticiaDAO.getNoticias(function(error,result){        
        res.render("noticias/noticias",{noticias:result});
      });
           
  });
}