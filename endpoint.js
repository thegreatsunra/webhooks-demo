const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.all('/', (req, res) => {
  res.send('Two hundred okay!!!')
  console.log(`${JSON.stringify(req.body)}\nResponded to request!\n\n`)
})

app.listen(3001, () => {
  console.log('Express endpoint listening on 3001')
})
