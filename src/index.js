const express = require('express')
const { engine } = require("express-handlebars");

const app = express() 
const port = 3000
const path = require('path')

const route = require('./routes')

//Rendering engine setup
app.engine("hbs", engine({
  extname: ".hbs"
}));

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))
app.use(express.static(path.join(__dirname, 'resource/public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//Routes
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})