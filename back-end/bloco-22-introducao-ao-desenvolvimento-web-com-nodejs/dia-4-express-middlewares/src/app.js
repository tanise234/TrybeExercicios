const express = require('express');
const priceValidation = require('../middlewares/priceValidation');
const nameValidation = require('../middlewares/nameValidation');
const descValidation = require('../middlewares/descValidation');

const app = express();

app.use(express.json());

app.post('/activities', nameValidation, priceValidation, descValidation, (req, res) => {
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;