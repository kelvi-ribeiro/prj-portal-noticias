var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.send("<html><body><h1>Portal de Notícias<h1/><body/><html/>");
});
app.get('/tecnologia',function(req,res){
    res.render("secao/tecnologia");
});

app.get('/moda',function(req,res){
    res.send("<html><body><h1>Notícias de Moda<h1/><body/><html/>");
});

app.get('/beleza',function(req,res){
    res.send("<html><body><h1>Notícias de Beleza<h1/><body/><html/>");
});

app.listen(3000,function(){
    console.log('Servidor Rodando Com Express');
});