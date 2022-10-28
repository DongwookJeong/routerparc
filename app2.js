const express = require('express')
const app = express()
const port = 7000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static("public"))
// app.use(express.static(__dirname + "views/login/login.html"))
// app.use(express.static(__dirname + "views/login/login.css"))

const loginPage = require("./login2")
app.use('/login', express.static(__dirname + '/public'))
app.use('/login', loginPage)

const boardPage = require("./routes/board")
app.use('/board', express.static(__dirname + '/public'))
app.use('/board', boardPage)

const boardPage2 = require("./routes/board2")
app.use('/board2', express.static(__dirname + '/public'))
app.use('/board2', boardPage2)

const mainPage = require("./main2")
app.use('/', express.static(__dirname + '/public'))
app.use('/', mainPage)

const signup = require("./signup")
app.use('/sign', express.static(__dirname + '/public'))
app.use('/sign', signup)
// app.get("/", (req, res) => {
// res.send('hi')
// })


app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})