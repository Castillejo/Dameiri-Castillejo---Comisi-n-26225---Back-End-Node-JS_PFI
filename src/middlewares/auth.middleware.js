import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ 
      success: false, 
      message: "Acceso no autorizado. Token no proporcionado (401)." 
    });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: "Formato de token no válido." 
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ 
        success: false, 
        message: "Token inválido o expirado (403)." 
      });
    }
    req.user = decoded;
    next();
  });
};