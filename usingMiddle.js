import express from 'express';

const app = express();

app.use(express.json());
app.use(
    function (req, res, next) {
        console.log(req.headers);
        next();
        console.log("Execution completed")
    }
)

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => {
    console.log('Open')
});