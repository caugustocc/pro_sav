// USANDO EL PATRON FACTORY PARA LA CREACIOM
// DE UN MIDDLEWARE DE VALIDACION
const Validator =
  ({ shape, getObject }) =>
  async (req, res, next) => {
    const dataObject = getObject(req);
    try {
      const valiData = await shape.validate(dataObject, { abortEarly: false });
      req.valiData = valiData;
    } catch (error) {
      req.errorData = error;
    }
    return next();
  };
// Exprotando Factory de validacion
export default Validator;
