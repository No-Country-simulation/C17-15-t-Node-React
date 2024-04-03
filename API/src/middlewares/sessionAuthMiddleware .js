const jwt = require('jsonwebtoken');

// Middleware de autenticación de sesión
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Token no proporcionado');
  }

  // Verificar el token incluyendo la verificación de expiración
  jwt.verify(
    token.split(' ')[1],
    process.env.JWT_SECRET_KEY,
    { ignoreExpiration: false }, // Esta opción habilita la verificación de expiración
    (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).send('Token ha expirado');
        } else {
          return res.status(401).send('Token inválido');
        }
      }

      // Si el token es válido y no ha expirado, puedes acceder a la información del usuario en `decoded`
      req.user = decoded;
      next();
    }
  );
}

module.exports = verifyToken;
