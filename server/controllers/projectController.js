/* Actions Methods */

// Lista los proyectos
// GET /projects | GET /proyects/index
const index = (req, res) => {
  res.send('Listando proyectos 🛠⚒⚒🛠');
  // TODO: Agregar codigo de listado de proyectos
};

// Agrega ideas de proyectos
const add = (req, res) => {
  res.render('users/addUser', {});
  //   TODO: Mas codigo plis
};

// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
const addPost = (req, res) => {
  // Desestructurando la informacion
  // del formulario
  const { valiData: project } = req.body;
  // Regresar un objeto con los datos
  // obtenidos del formulario
  res.status(200).json({ project });
};
// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
