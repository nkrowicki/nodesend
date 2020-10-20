const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (authHeader) {
    // Obtener el token
    const token = authHeader.split(" ")[1];

    // Comprobar json web token
    try {
      const usuario = jwt.verify(token, process.env.SECRETA);
      req.usuario = usuario;
    } catch (e) {
      console.log("JWT no valido");
    }
  }
  return next();
};
