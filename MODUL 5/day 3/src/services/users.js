const express = require("express")

const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")

const router = express.Router()

const readFile = (fileName) => {
    const buffer = fs.readFileSync(path.join(__dirname, fileName))
    return JSON.parse(buffer.toString())
}

router.get("/", (req,res) => {
const usersDB = readFile('users.json')

    if(req.query && req.query.name){
        const filteredUsers = usersDB.filter(user=> user.hasOwnProperty("name") && user.name === req.query.name)
        res.send(filteredUsers)
    }else{
        res.send(usersDB)
    }

} ) // http://localhost:3001/users/

router.get("/:id", (req,res) => {
    const usersDB = readFile("users.json")
    usersDB.filter( (user) => {
        console.log(user.ID)
         return user.ID === req.params.id})
    })

router.post("/", (req,res) => {
    const usersDB = readFile("users.json")
    const newUser = {...req.body, ID: uniqid(), createAt: new Date() }

    usersDB.push(newUser)

    fs.writeFileSync(path.join(__dirname, "users.json"),JSON.stringify(usersDB))
    res.status(201).send(newUser)
})

router.put("/:id", (req,res)=>{
    const usersDB= readFile("users.json")
    const newDB = usersDB.filter(user=> user.ID !== req.params.id)
    const modifiedUser = {...req.body, ID: req.params.id}
    newDB.push(modifiedUser)
    fs.writeFileSync(path.join(__dirname, "users.json"),JSON.stringify(newDB))
    res.send(newDB)
})

router.delete("/:id", (req,res)=>{
    const usersDB= readFile("users.json")
    const newDB = usersDB.filter(user=> user.ID !== req.params.id)
    fs.writeFileSync(path.join(__dirname, "users.json"),JSON.stringify(newDB))
    res.send(newDB)
})

module.exports = router