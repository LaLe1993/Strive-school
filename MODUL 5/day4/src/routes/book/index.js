const express = require("express")
const fs= require("fs")
const path = require("path")
const { body, validationResult } = require("express-validator")

const getBooks = () => {
    const bookJsonPath = path.join(__dirname, "books.json")
    const bookContent = fs.readFileSync(bookJsonPath)
    const bookString = bookContent.toString();
    const books = JSON.parse(bookString)
    return books
}

const writeBooks = (books) =>{
    const bookJsonPath = path.join(__dirname, "books.json")
    fs.writeFileSync(bookJsonPath, JSON.stringify(books))
}


const bookRouter = express.Router()

bookRouter.get("/:asin",(req,res) => {
    const books = getBooks()
    const book = books.find(b => b.asin === req.params.asin)
    
    if (book)
    res.send(book)
    else
    res.status(404).send("Not Found");
})

bookRouter.get("/", async(req,res)=>{
    let books = getBooks()
    for(let p in req.query){
        books = books.filter(book => book[p].toLowerCase().indexOf(req.query[p].toLowerCase()) > -1)
    }
    res.send(books)
})

//Our code & config
const bookValidation = [ body("asin").isLength({min:9,max:9}),
body("title").isLength({ min: 2 }),
body("category").exists,
body("price").isCurrency()]

bookRouter.post("/", bookValidation ,(req,res)=>{
    console.log(req)
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const books = getBooks()
    books.push(req.body)
    writeBooks(books)
    res.status(201).send(req.body)
    }else{
        res.status(400).send(errors)
    }

    
})

bookRouter.put("/:asin",(req,res)=>{

    const books = getBooks()
    const index = books.map(x => x.asin).indexOf(req.params.asin)

    if(index === -1){
        return res.status(404).send("Not Found")
    }else{
        books[index] = req.body
        writeBooks(books)
        res.send("PUT")
    }

    res.send("PUT")
})

bookRouter.delete("/:asin",(req,res)=>{
    const books = getBooks()
    const filtered = books.filter(book => book.asin !== req.params.asin)
    if(books.length === filtered.length)
        return res.status(404).send("Not Found")
    else{
        writeBooks(filtered)
        res.send("DELETE")
    }
})

module.exports = bookRouter;