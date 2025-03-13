const authMiddleware = (req, res, next) => {
    const { userId } = req.headers;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    req.userId = userId;
    next();
};
module.exports = authMiddleware;