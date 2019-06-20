const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const urlEncodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))
app.use(bodyParser.json())


// --- TIME STUFF --- //

let date = new Date()
let hours = date.getHours();
let minutes = date.getMinutes()
let ampm = hours >= 12 ? 'pm' : 'am'
hours = hours % 12
hours = hours ? hours : 12
minutes = minutes < 10 ? '0'+minutes : minutes
let strTime = hours + ':' + minutes + ' ' + ampm

let now = new Date()
let hour = now.getHours()
let minute = now.getMinutes()
let currentTime = `${hour}${minute}`

let time
if (currentTime <= 1159) time = 'morning'
else if (currentTime <= 1200 && currentTime > 1700) time = 'afternoon'
else time = 'evening'

app.locals.strTime = strTime
app.locals.time = time


// --- ROUTING --- //

app.get('/greeting', (req, res) => {
  // console.log(req.query)
  res.send(`Good ${time}, Mr. ${req.query.name}!\nThe time is now ${strTime}.\nPut on some ${req.query.favorite} and have a great day. \n\n `)
})

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', urlEncodedParser, (req, res) => {
  // console.log(req.body)
  app.locals.name = req.body.lastName
  app.locals.favorite = req.body.favorite
  res.render('greeting', {user: req.body})
})

// --- //

app.listen(8080)
console.log('Listening on port 8080.')
