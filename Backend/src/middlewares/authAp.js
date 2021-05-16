const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    // ==> um console para termos uma saída do 'token'
    console.log(token);
    const decoded = jwt.verify(token, 'secret');
    req.aplicadorData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Falha na Autenticação!' });
  }
};