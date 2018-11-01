const express = require('express')
const router = express.Router()

// Data
const students = require('../students.json')

// GET all route
// Send back all characters, with a root key of 'characters'
router.get('/', (req, res) => {
  res.json({ students: students })
})

// GET one route
// Sends back a single character from the data
// Use route parameters
// Has a root key of 'character'
router.get('/:id', (req, res, next) => {
  // Grab the id of the character we want from the request URL parameters
  const id = req.params.id


  const student = students.filter(student => {
    return student.id == id
  })

  if (!student.length) {
    next()
  }

  // Respond with the correct character
  res.json({ student: student[0] })
})

// Clever but fragile approach accessing the characters array by index
// app.get('/characters/:id', (req, res, next) => {
//   res.json(characters[req.params.id - 1])
// })


router.post('/', (req, res, next) => {
  // Pull the data that is to be posted from the request body
  const body = req.body
  console.log(body)

  // Insert new data into characters array
  // WE NEED BODY PARSER
  // Where does it go?
  // How does it get used?

  // Get the data into the 'database'
  students.push(body)

  // Respond to the client with some data
  res.json({ students: students})
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  console.log(id)
  console.log(body)

  // Find correct resource by it's ID
  // Some type of loop
  const updatedStudents = students.map(student => {
    // The current character is the one with matching ID
    if (student.id == id) {
      // Replace the character that matches by ID with the new body
      return body
    }
    // The current character is NOT the one with matching ID
    return student
  })

  // res.json() with the modified array
  res.json({ students: updatedStudents })

})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  // Find correct resource by it's ID
  // Some type of loop
    // Remove the resource from the array
  const survivors = students.filter(student => {
    return student.id != id
  })

  // res.json() with the updated array (or new array)
  res.json({ students: survivors })
})



module.exports = router
