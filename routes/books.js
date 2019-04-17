const express = require('express')
const router = express.Router()

/* GET books listing. */
const books = [
  {
    id: 1,
    name: 'Abc'
  },
  {
    id: 1,
    name: 'Def'
  },
  {
    id: 1,
    name: 'Ghi'
  },
  {
    id: 1,
    name: 'Jkl'
  },
  {
    id: 1,
    name: 'Mno'
  },
  {
    id: 1,
    name: 'Pqr'
  },
  {
    id: 1,
    name: 'Stu'
  }
];

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function(req, res, next) {
  res.json(books)
});

router.post('/', function(req, res, next) {
  res.send('post request')
});

module.exports = router
