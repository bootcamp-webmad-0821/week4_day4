const router = require("express").Router()

const Book = require('./../models/Book.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

// Listado de libros
router.get('/libros', (req, res) => {

  Book
    .find()
    .then(books => res.render('books/list', { books }))
    .catch(err => console.log(err))

})

// Detalles de libros
router.get('/libros/detalles/:book_id', (req, res) => {

  const { book_id } = req.params
  console.log('NO ARRIESGO =====>', book_id)

  Book
    .findById(book_id)
    .then(theBook => res.render('books/details', theBook))
    .catch(err => console.log(err))
})



module.exports = router