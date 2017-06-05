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
}, 1000)
