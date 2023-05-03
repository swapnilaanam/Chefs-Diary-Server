const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Chef's diary server is running...");
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const selectedChef = chefs.find((chef => chef.chefId === id));

    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`Sever is running on Port: ${port}`);
});