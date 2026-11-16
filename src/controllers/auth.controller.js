import { AuthService } from "../services/auth.service.js";

export const AuthController = {
  login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        const err = new Error("Se requiere 'username' y 'password'.");
        err.status = 400;
        throw err;
      }
      const result = AuthService.authenticate(username, password);
      res.json({ success: true, token: result.token });
    } catch (error) {
      next(error);
    }
  }
};