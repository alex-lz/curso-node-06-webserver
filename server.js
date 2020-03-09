const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000;// To get port env variables from heroku

// Middleware
app.use(express.static( __dirname + '/public'))

// Express HBS - HandleBars(engine)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
  res.render('home', {
      nombre: 'alejanDro'
      //anio: new Date().getFullYear()
  })
})

app.get('/about', function (req, res) {
    res.render('about')
})

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${ port }`)
})

// Nota: http://localhost:3000/index.html
// Nodemon este pendiente de mas archivos => nodemon server -e js,hbs,html,css


/**Old way */
/*   app.get('/about', function (req, res) {
    res.render('about', {
        anio: new Date().getFullYear()
    })
  }) */

  /**Old-Old  Way */
/* app.get('/', function (req, res) {
  // res.send('Hello World')
  let salida = {
    nombre: 'Alejandro',
    edad: 21,
    url: req.url
  }
  res.send(salida)
})

app.get('/data', function (req, res) {
    res.send('Hola data')
}) */
 