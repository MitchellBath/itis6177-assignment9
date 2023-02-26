const express = require('express')
const app = express()
const port = 3000
const { says } = require('./my-function')


app.get('/say', (req, res) => {
const { keyword } = req.query
const text = says(keyword)

res.send(text)
})
	

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
