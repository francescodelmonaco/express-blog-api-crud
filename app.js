const express = require('express');
const app = express();
const port = 3000;
const postRouter = require("./router/postRouter");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use("/posts", postRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});