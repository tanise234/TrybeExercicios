const nameValidation = (req, res, next) => {
    const { name } = req.body;
    if (!name || name.length <= 4) {
        return res.status(400).json({ "message": "O campo name é obrigatório e precisa ter mais do que 4 carcteres." })
    }
    console.log('name : ', name.length);
    next();
};

module.exports = nameValidation;