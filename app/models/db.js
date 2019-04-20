const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'rootuser',
    password : 'Pass@1234',
    database : 'my_db'
});

connection.connect(function(err) {
  if (err) throw err
})

module.exports = connection
