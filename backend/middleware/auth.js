const jwt = require("jsonwebtoken");
const JWT_SECRET =
  process.env.JWT_SECRET ||
  "12dc1ec7fa8a336979684876856745e349806f42e11fcaa42cd62f7838fad826c9635d1093d5e20b80205dbac1e65674fa6bbe135b3576a2a493f5c8ef73d2ff";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role)
      return res.status(403).json({ error: "Forbidden" });
    next();
  };
}

module.exports = { authMiddleware, requireRole };
