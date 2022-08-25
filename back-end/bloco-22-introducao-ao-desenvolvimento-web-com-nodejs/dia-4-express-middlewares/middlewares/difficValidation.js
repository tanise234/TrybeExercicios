const difficValidation = (req, res, next) => {
    const difficulty = req.body.description.difficulty;
    const classification = ['Fácil', 'Médio', 'Difícil'];

    if (classification.every(level => level !== difficulty)) {
        return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'." });
    }
    next();
};

module.exports = difficValidation;