const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
})



// http://localhost:3000/vuelos/origen/melilla/destino/berlin/fecha/23-11-2022
router.get('/vuelos/origen/:origin/destino/:destination/fecha/:departure_date', (req, res) => {

  const { origin, destination, departure_date } = req.params

  console.log('---------')
  console.log('Este es el objeto req.params:', req.params)
  console.log('Debes enviar a la BBDD como origen', origin)
  console.log('Debes enviar a la BBDD como destino', destination)
  console.log('Debes enviar a la BBDD como fecha ida', departure_date)
  console.log('---------')

  res.send('<h1>¡Mira la terminal!</h1>')
})



// http://localhost:3000/tienda?clothe=pantalon&color=red&season=verano
router.get('/tienda', (req, res) => {

  console.log('---------')
  console.log('Este es el objeto req.query:', req.query)
  console.log('---------')

  res.send('<h1>¡Mira la terminal!</h1>')
})




// Buscador de ropa: renderizar formulario
router.get('/buscador', (req, res) => {
  res.render('search-form')
})

// Buscador de ropa: gestionar formulario
router.get('/resultados-buscador', (req, res) => {
  res.render('search-results', req.query)
})





// Formulario registro: renderizado (GET)
router.get('/registro', (req, res) => {
  res.render('signup-form')
})

// Formulario registro: gestión (POST)
router.post('/registro', (req, res) => {

  const { username, passw } = req.body
  console.log(req.body)

  res.send(`<p>El usuario será ${username} y la contraseña ${passw}</p>`)
})

module.exports = router
