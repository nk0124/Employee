const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const Employee = require('./routes/employeeApi')
app.use("/emp",Employee)


app.listen(port, () => {
  console.log(`Employee Management app listening on port ${port}`)
})
