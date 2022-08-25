const express = require('express');
const priceValidation = require('../middlewares/priceValidation');
const nameValidation = require('../middlewares/nameValidation');

const app = express();

app.use(express.json());

app.post('/activities', nameValidation, priceValidation, (req, res) => {
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;