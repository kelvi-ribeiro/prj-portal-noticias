var mysql = require('mysql');
module.exports = function(){
     return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'262517kaka',
        database:'portal_noticias'
        });
}
