const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
var cors = require('cors')

 
app.use(cors())
app.use(express.json());


app.use('/api/map', require('./routes/map'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

