import express from 'express';

const app = express();

app.use(express.json());
app.use(
    function (req, res, next) {
        console.log(req.url);
        next();
        console.log("Execution completed")
    }
)

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/test", (req, res) => {
    res.send({"message": "test"});
});

app.listen(3000, () => {
    console.log('Open')
});