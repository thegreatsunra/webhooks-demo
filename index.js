const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express listening on port 3000')
})

let interval
let count = 0

interval = setInterval (() => {
  count++

  let now = new Date()
  let timestamp = now.toISOString()
  let message = JSON.stringify({
    timestampUTC: timestamp,
    messageCount: count,
    payload: {
      keyOne: true,
      keyTwo: 'value'
    }
  })

  let endpointOptions = {
    host: 'localhost',
    port: 3001,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(message)
    }
  }

}, 1000)
