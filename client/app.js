const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'build');
const port = 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`Client is listening on port ${port}`);
})

