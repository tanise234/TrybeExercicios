const creatValidation = (req, res, next) => {
    const date = req.body.description.createdAt;
    const format = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!format.test(date)) {
        return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'." });
    }
    next();
};

module.exports = creatValidation;