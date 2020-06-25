const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()

app.use(cors())
app.use(express.json())

const myLogger = (req,res,next) => {
    //req is input
    //res is output
    console.log(req)
    fs.appendFileSync("log.txt", `\n ${new Date()} - ${req.method} -> ${req.baseUrl}`)
    next()
}

const bookRouter = require("./src/routes/book")

app.get("/hello", async(req , res) => {
    //req will have all the information about the request!
    //res will have all the information about the response!
    //here goes code
    console.log("Hey server")

    res.status(200).send("Hello world")
})

app.use("/books", bookRouter)

app.listen(3001, () => {
    console.log("Hey")
})