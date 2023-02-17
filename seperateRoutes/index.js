import express from "express";
import { router as r1} from "./routes/hello.js";
import { router as r2} from "./routes/hi.js"

const app = express();
app.use(express.json());
app.use(r1);
app.use(r2);

app.get("/", async function (req, res) {
    res.send({ "message": "Hello World" });
})

app.listen(8080, () => { console.log("Online") })