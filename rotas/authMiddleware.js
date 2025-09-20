const jwt = require("jsonwebtoken");
const JWT_SECRET = "seu_jwt_secret"; // Troque por variável de ambiente em produção

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token não fornecido" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(403).json({ message: "Token inválido" });
  }
}

module.exports = authMiddleware;
