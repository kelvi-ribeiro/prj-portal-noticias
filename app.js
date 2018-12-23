var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("<html><body><h1>Portal de Notícias<h1/><body/><html/>");
});
app.get('/tecnologia',function(req,res){
    res.send("<html><body><h1>Notícias de Tecnologia<h1/><body/><html/>");
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