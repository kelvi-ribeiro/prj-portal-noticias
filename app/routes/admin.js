module.exports = function(app){
    app.get('/formulario-inclusao-noticia',function(req,res){
        res.render("admin/form_add_noticia");
    });
    app.post('/noticias/salvar',function(req,res){
        var noticia = req.body;        
        var connection = app.config.dbConnection();
        var noticiaDAO = new app.app.models.NoticiaDAO(connection);
        noticiaDAO.salvarNoticia(noticia,function(error,result){        
            res.redirect('/noticias');
          });
    });
}