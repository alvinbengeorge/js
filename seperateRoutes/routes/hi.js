import express from "express";

const router = express.Router()

router.get("/hi", async function(req, res) {
    res.send({ "message": "Hi" });
});

export {router};