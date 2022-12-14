module.exports = reqFilter = (req, res, next) => {
    if (req.query.age < 20) {
        next();
    }
    else {
        res.send("Please provide Details");
    }
    console.log("req Filter")
}