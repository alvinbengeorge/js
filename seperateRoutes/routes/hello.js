import express from "express";

const router = express.Router()

router.get("/hello", async function(req, res) {
    res.send({ "message" : "Hello"});
})

export {router};