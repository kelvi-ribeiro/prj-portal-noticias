module.exports.index = function(app,req,res){
    var connection = app.config.dbConnection();
    var noticiaDAO = new app.app.models.NoticiaDAO(connection);

    noticiaDAO.getCincoUltimasNoticias(function(error, result){
        console.log(result);
        res.render("home/index",{noticias:result}); 
    });
        
}