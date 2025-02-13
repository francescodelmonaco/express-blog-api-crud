const express = require('express');
const app = express();
const port = 3000;
const postRouter = require("./router/postRouter");

app.use(express.static('public'));

// registro il body-parser per "application/json"
app.use(express.json());

app.post("/", (req, res) => {
    // dentro req.body troveremo
    // i dati ricevuti in formato json
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use("/posts", postRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});