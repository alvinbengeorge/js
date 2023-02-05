import express from "express";

const app = express()
app.use(express.json())

app.get("/", async function (req, res) {
    res.send({ "message": "Hello World" });
})

app.listen(8080, () => { console.log("Online") })