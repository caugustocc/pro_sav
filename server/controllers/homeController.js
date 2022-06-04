// URL: get /
const index = (req, res) => {
  // render manda a generar y entregar
  // la vista al cliente
  const viewModel = {
    title: 'Index Controler Working !!!',
    author: 'Oaxacarlos',
  };
  res.render('index', viewModel);
};
export default {
  // [Action methods]
  index,
};
