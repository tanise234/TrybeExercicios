const rateValidation = (req, res, next) => {

    const rating = req.body.description.rating;

    if(Number(rating) < 1 || Number(rating) > 5) {
        return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5." });
    }
    next();
};

module.exports = rateValidation;