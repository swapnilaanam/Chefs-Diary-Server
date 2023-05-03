const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Chef's diary server is running...");
});

app.listen(port, () => {
    console.log(`Sever is running on Port: ${port}`);
});