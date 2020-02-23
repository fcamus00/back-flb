const validateRegister = async (req, res, next) => {
  const newRequest = req.body;
  if (newRequest.rut && newRequest.celular && newRequest.email && newRequest.renta) {
    const cel = Number(newRequest.celular);
    const ren = Number(newRequest.renta);
    if (Number.isNaN(cel)) {
      return res.status(400).json({message: 'El campo Celular no fue ingresado correctamente'});
    } else if (Number.isNaN(ren)) {
      return res.status(400).json({message: 'El campo Renta no fue ingresado correctamente'});
    } else if (!newRequest.email.includes('@')) {
      return res.status(400).json({message: 'El campo Email no fue ingresado correctamente'});
    } else if (!newRequest.rut.includes('-')) {
      return res.status(400).json({message: 'El campo Rut no fue ingresado correctamente'});
    } else {
      next();
    }
  }
};

module.exports = { validateRegister };