/*
PREREQUISITES:
install express module using the package.json file with command:
>npm install

TO TEST:
Use browser to view pages at http://localhost:3000/index.html.
*/

const express = require('express')
const app = express()
const logger = require('morgan')
const request = require('request')
const path = require('path')

const PORT = process.env.PORT || 3000
const ROOT_DIR = 'public';    // Root directory for our static pages
// const API_KEY = '9ca1210030a32fc8b96896b0b4bc4264'     // Extra API key in case usage exceeds 50 calls/day maximum
const API_KEY = 'ea8b51b6cacd4e29895622676a82b31f'

app.use(express.static(path.join(__dirname, ROOT_DIR)))     // Provide static server

app.get('/recipes', function(req, resp){
  let ingredient = req.query.ingredients
  if(!ingredient)
    return resp.sendFile(__dirname + "/view/recipes.html")
  url = `https://food2fork.com/api/search?q=${ingredient}&key=${API_KEY}`
  request.get(url, function(err, res, data){
    return resp.contentType('application/JSON').json(data);
  })
})

app.use(logger('dev'))

//Routes
app.get('/', function(req, resp){
  resp.redirect('/recipes')
})
app.get('', function(req, resp){
  resp.redirect('/recipes')
})
app.get('/recipes.html', function(req, resp){
  resp.redirect('/recipes')
})
app.get('/index.html', function(req, resp){
  resp.redirect('/recipes')
})


// Start server
app.listen(PORT, err => {
  if(err) console.log(err)
  else {
      console.log(`Server listening on port: ${PORT} CTRL + c to quit`)
      console.log('To Test:')
      console.log('http://localhost:3000/recipes')
      console.log('http://localhost:3000/recipes?ingredient=Basil')
      console.log('http://localhost:3000/recipes?ingredient=Basil,Cumin')
  }
})
