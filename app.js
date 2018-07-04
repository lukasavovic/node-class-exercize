const express = require('express')
const app = express()
var loops = require('./loops')
var fizzbuzz = require('./fizzbuzz')
var parameters = require('./parameters')


app.get('/', (req, res) => res.send('Hello World!' + req.get('User-agent')))

app.get('/loop', loops.spin)

app.get('/fizzbuzz', fizzbuzz.execute)

app.get('/parameters/:id', parameters.integerReturn)

app.listen(3000, () => console.log('Example app listening on port 3000!'))


 