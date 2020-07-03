const express = require("express") // third party module
const fs = require("fs") // core module dedicated to file system interactions
const path = require("path") // core module
const uniqid = require("uniqid") // third party module

const router = express.Router()

const reviewsFilePath = path.join(__dirname, "reviews.json")

router.get("/", (request, response) => {
    const fileContentAsABuffer = fs.readFileSync(reviewsFilePath)
    console.log(fileContentAsABuffer)
    const fileContent = fileContentAsABuffer.toString()

    response.send(JSON.parse(fileContent))
})

router.get("/:id", (request, response) => {

    const fileContentAsABuffer = fs.readFileSync(reviewsFilePath)
    const reviewsArray = JSON.parse(fileContentAsABuffer.toString())
    console.log(reviewsArray)
  
    console.log("ID: ", request.params.id)
    const review = reviewsArray.filter((review) => review._id === request.params.id)
    console.log(review)

    response.send(review)
  })

  router.post("/", (request, response) => {
    const newReview = { ...request.body, _id: uniqid() }
  
    const fileContentAsABuffer = fs.readFileSync(reviewsFilePath)
    const reviewsArray = JSON.parse(fileContentAsABuffer.toString())
  
    reviewsArray.push(newReview)

    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviewsArray))

    response.status(201).send(newReview)
  })

  router.put("/:id", (request, response) => {
  
    const fileContentAsABuffer = fs.readFileSync(reviewsFilePath)
    const reviewsArray = JSON.parse(fileContentAsABuffer.toString())

    const filteredReviewsArray = reviewsArray.filter(
      (review) => review.imdbID !== request.params.id
    )

    const review = request.body
    review._id = request.params.id
  
    filteredReviewsArray.push(review)
  
    fs.writeFileSync(reviewsFilePath, JSON.stringify(filteredReviewsArray))
  
    response.send("Ok")
  })

  router.delete("/:id", (request, response) => {

    const fileContentAsABuffer = fs.readFileSync(reviewsFilePath)
    const reviewsArray = JSON.parse(fileContentAsABuffer.toString())
  
    const filteredReviewsArray = reviewsArray.filter(
      (review) => review._id !== request.params.id
    )

    fs.writeFileSync(reviewsFilePath, JSON.stringify(filteredReviewsArray))
  
    response.send(`Review has been deleted`)
  })

module.exports = router