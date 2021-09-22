import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

// *************************************************************

// funciones:

function buscarCancion(e) {
  const ambosCampos = 'Ambos campos son obligatorios';
  e.preventDefault();
  // obtener datos:
  const artista = document.querySelector('#artista').value;
  const cancion = document.querySelector('#artista').value;

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
    }, 5000);

    return;
  }

  // llamar api: https
}
