import jwt from "jsonwebtoken";

export const AuthService = {
  authenticate(username, password) {
    if (username === "admin" && password === "admin123") {
      const token = jwt.sign(
        { username, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      );
      return { token };
    }
    const err = new Error("Credenciales inválidas (usuario o contraseña incorrectos).");
    err.status = 401;
    throw err;
  }
};