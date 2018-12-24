var mysql = require('mysql');
var connMySQL = function(){                
        return mysql.createConnection({        
           host:'localhost',
           user:'root',
           password:'262517kaka',
           database:'portal_noticias'
           });
}
module.exports = function(){
     return connMySQL;
}
