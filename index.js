const express = require('express')
const app = express()
const port = 3000

// routes + arrow function (hàm mũi tên)
app.get('/tin-tuc', (req, res) => {
  var a = 1;
  var b = 2;

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})