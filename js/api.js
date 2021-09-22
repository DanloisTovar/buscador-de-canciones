// importar interfaces:
import * as UI from './interfaz.js';

class llamarApi {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }

  consultarApi() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (datos.lyrics) {
          const { lyrics } = datos;

          // puliendo resultado de la api
          UI.divResultado.textContent = `${lyrics.replace(
            'Paroles de la chanson',
            ''
          )}`;

          UI.divEncabezado.textContent = `${this.artista}: ${this.cancion}`;
        } else {
          UI.divMensajes.classList.add('error');
          UI.divMensajes.textContent = 'Verifique los datos introducidos!';

          setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
            UI.divResultado.remove();
          }, 5000);
        }
      })
      .catch((err) => {
        console.log('No se puede acceder a la Api' + err);
      });
  }
}

export default llamarApi;
