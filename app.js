var app = require('./config/server');

//require('./app/routes/noticias')(app);

//require('./app/routes/home')(app);
//Podem ser feito o require de uma função do jeito de cima e de baixo
//var rotaFormularioNoticia = require('./app/routes/formulario-inlusao-noticia');
//rotaFormularioNoticia(app);

app.listen(3000,function(){
    console.log('Servidor Rodando Com Express');    
});