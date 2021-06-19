const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const router = require('./routes')

app.use(cors());
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(router);
// app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})