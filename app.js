const express = require('express')
const app = express()
const PORT = 3000
var bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')



app.use(express.static('css'))

app.use(bodyParser.urlencoded({ extended : false}))

app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')



app.get("/",function(req,res){
  res.render("homepage")

})

app.listen(PORT, function(){
  console.log("Server is running...")
})
