// URL: get /
const index = (req, res) => {
  // render manda a generar y entregar
  // la vista al cliente

  // render manda a generar y entregar
  // la vista al cliente
  const viewModel = {
    title: 'Index Controler Working !!!',
    author: 'Cruz',
  };
  res.render('home/indexView', viewModel);
};
// URL::  Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Carlos Cruz',
    email: 'cuccaugusto@gmail.com',
    url: 'https',
    description:
      'Control y transmision de las juntas parlamentarias de la comunidad de Santa Ana Del Valle',
    version: '0.0.alpha',
  });
};

export default {
  // [Action methods]
  index,
  about,
};
