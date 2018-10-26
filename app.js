const express = require('express')
const app = express ()
let port = process.env.PORT || 3000

const cake = ('./cakes.json')
const students = ('./studens.json')

app.get ('/', (req,res) =>{
  res.send('Soft as cake 🍰 ')
})
