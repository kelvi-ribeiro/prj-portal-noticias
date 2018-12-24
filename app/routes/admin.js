module.exports = function(app){
    app.get('/formulario-inclusao-noticia',function(req,res){
        res.render("admin/form_add_noticia",{validacao:{},noticia:{}});
    });
    app.post('/noticias/salvar',function(req,res){
        var noticia = req.body;
        req.assert('titulo','Título é Obrigatório').notEmpty();
        req.assert('resumo','Resumo é Obrigatório').notEmpty();        
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','Resumo é Obrigatório').notEmpty(); 
        req.assert('data_noticia','Data da notícia é Obrigatório').notEmpty()

        /* Não é mais assim, rever depois a documentação se necessário
        https://github.com/express-validator/express-validator/issues/413

        https://express-validator.github.io/docs/custom-validators-sanitizers.html

        https://stackoverflow.com/questions/48875776/how-to-use-a-custom-express-validator
        
        req.assert('data_noticia','Respeite o formato YYYY/MM/DD').isDate({format:'YYYY/MM/DD'});  
        */
                                                                  
        req.assert('noticia','Notícia é Obrigatório').notEmpty(); 
        var errors = req.validationErrors();
        
        if(errors){
            console.log(noticia)
            res.render("admin/form_add_noticia",{validacao:errors, noticia:noticia});
            return;
        }

        var connection = app.config.dbConnection();
        var noticiaDAO = new app.app.models.NoticiaDAO(connection);
        noticiaDAO.salvarNoticia(noticia,function(error,result){        
            res.redirect('/noticias');
          });
    });
}
