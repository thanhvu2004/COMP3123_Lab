var express = require('express')

const SERVER_PORT = 8089
var app = express()

//Static middleware
app.use("/test", express.static("./public"))
app.use(express.json())
//app.use(express.text())
//https://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({extended: true}))


//http://localhost:8089/index
// app.get("/index", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })

//http://localhost:8089/
app.get("/", (req, res) => {
    res.status(201).send("<h1>Welcome to Express Server</h1>")
    //res.send("<h1>Welcome to Express Server</h1>")
    //res.end()
})


//http://localhost:8089/home
app.get("/home", (req, res) => {
    res.send("Home Page")
})

//http://localhost:8089/person
app.post("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Pritesh Patel"
    }

    res.send(JSON.stringify(p))
    //res.json(p)
})

//http://localhost:8089/person
app.get("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Pritesh Patel",
        city: "Toronto"
    }

    //res.send(p)
    res.json(p)
})

//http://localhost:8089/student/pritesh/patel
//Path Parameter
app.get("/student/:fname/:lname", (req, res) => {
    //res.json(req.params)
    const {fname, lname} = req.params
    res.send(`Welcome ${fname} ${lname}`)
})

//http://localhost:8089/student?fnm=pritesh&lnm=patel
//Query Parameter
app.get("/emp", (req, res) => {
    //res.json(req.query)
    if(req.query.fnm == undefined){
        res.send("Please send fnm as query parameter")
    }
})

//Get data as a body parameter
//Use Postman or curl to invoke these endpoint
//http://localhost:8089/faculty
app.post("/faculty", (req, res) => {
    let data = req.body //Get body data
    console.log(data)

    res.send(data)
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})