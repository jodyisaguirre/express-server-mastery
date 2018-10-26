const express = require('express')
const app = express ()
let port = process.env.PORT || 3000

const cake = ('./cakes.json')
const students = ('./studens.json')

app.get ('/', (req,res) =>{
  res.send('Soft as cake 🍰 ')
})



app.use(notFound)
  // General purpose 'catch' all errors
app.use(errorHandler)


function notFound(req, res, next) {
  res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port, () => console.log(`Server running on port ${port}`))
