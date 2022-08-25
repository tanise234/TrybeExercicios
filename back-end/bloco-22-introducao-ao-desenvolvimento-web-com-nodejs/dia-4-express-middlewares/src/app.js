const express = require('express');
const priceValidation = require('../middlewares/priceValidation');
const nameValidation = require('../middlewares/nameValidation');
const descValidation = require('../middlewares/descValidation');
const creatValidation = require('../middlewares/creatValidation');
const rateValidation = require('../middlewares/rateValidation');
const difficValidation = require('../middlewares/difficValidation');

const app = express();

app.use(express.json());

app.post('/activities', nameValidation, priceValidation, descValidation, creatValidation, rateValidation, difficValidation, (req, res) => {
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;