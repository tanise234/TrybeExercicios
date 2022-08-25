const descValidation = (req, res, next) => {
    const desc = req.body.description;
    
    if(!desc) {
        return res.status(400).json({ "message": "O campo description é obrigatório." });
    }
    if(!(desc.createdAt)) {
        return res.status(400).json({ "message": "O campo createdAt é obrigatório." });
    }
    if(!desc.rating) {
        return res.status(400).json({ "message": "O campo rating é obrigatório." });
    }
    if(!desc.difficulty) {
        return res.status(400).json({ "message": "O campo difficulty é obrigatório." });
    }
    next();
};

module.exports = descValidation;