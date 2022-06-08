/* global M */
import './styles/mystyle.css';

/* Inicializando elementos de materializecss */
document.addEventListener('DOMContentLoaded', () => {
  // Obteniendo la referencia a la barra de navegacion
  // lateral
  const sideNavs = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(sideNavs);

  const dropdowns = document.querySelectorAll('.dropdown-tigger');
  M.Dropdown.init(dropdowns);
});
