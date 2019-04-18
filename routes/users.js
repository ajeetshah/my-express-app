const express = require('express')
const router = express.Router()
const mysql = require('mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

router.get('/db', function(req, res, next) {
  
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'rootuser',
    password : 'Pass@1234',
    database : 'mysql'
  });

  connection.connect()

  connection.query('SELECT User, Host FROM mysql.user;', function (err, rows, fields) {
    if (err) throw err
    console.log('query result is: ', rows)
  })

  connection.end()

  res.send('i will test db')
})

module.exports = router
