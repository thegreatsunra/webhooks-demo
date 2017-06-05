const express = require('express')
const app = express()
app.all('/', (req, res) => {
  res.send('Two hundred okay!!!')
})
app.listen(3001, () => {
  console.log('Express endpoint listening on 3001')
})
