import * as UI from './interfaz.js';
import llamarApi from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

// *************************************************************

// funciones:

function buscarCancion(e) {
  const ambosCampos = 'Ambos campos son obligatorios';
  e.preventDefault();
  // obtener datos:
  const artista = document.querySelector('#artista').value;
  const cancion = document.querySelector('#cancion').value;

  // validacion de campos:
  if (artista === '' || cancion === '') {
    // mostrar mensaje de error:
    UI.divMensajes.textContent = `Error... ${ambosCampos}`;
    // estilos:
    UI.divMensajes.classList.add('error');

    // reset error:
    setTimeout(() => {
      UI.divMensajes.textContent = '';
      UI.divMensajes.classList.remove('error');
      UI.divResultado.remove();
    }, 5000);

    return;
  }

  // llamar api:
  const busqueda = new llamarApi(artista, cancion);

  // consultar API:
  busqueda.consultarApi();
  // restear formulario:
  setTimeout(() => {
    UI.formularioBuscar.reset();
  }, 5000);
}
