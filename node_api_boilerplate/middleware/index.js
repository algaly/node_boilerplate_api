const jwt = require("jsonwebtoken");

exports.VerifyToken = async (req, res, next) => {
    const token = req.cookies.mcvat;
    if (!token) return res.sendStatus(403);
    if (!token) {
        return res.sendStatus(403);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) return res.sendStatus(403);
        req._id = data._id;
        req.email = data.email;
        next();
    });
};
