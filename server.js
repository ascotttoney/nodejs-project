const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const urlEncodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', urlEncodedParser, (req, res) => {
  res.render('welcome', {user: req.body})
})

app.get('/welcome', (req, res) => {
  res.render('welcome', {user: req.query})
})

app.listen(8080)
console.log('Listening on port 8080.')